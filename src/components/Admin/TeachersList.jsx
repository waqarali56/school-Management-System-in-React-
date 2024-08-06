import React, { useState } from 'react'
import styles from './admin.module.css';
import{useAtom} from 'jotai';
import { teachersAtom } from '../jotai';
import { Link, Outlet } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function TeachersList() {

    const [teachers, setTeachers] = useAtom(teachersAtom);
    
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;
  const totalPages=(teachers.length)/(itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = (currentPage) * itemPerPage;
  const rows = teachers.slice(startIndex, endIndex);

  

  function HandleNextPage() {
   
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  function HandlePrevsPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
 
  


    function HandleDelete(object)
    {
       let NewTeachers=teachers.filter(t=>t.id!==object.id);
       setTeachers(NewTeachers);
    }

   
  
    
  return (
    <>
    <div className={styles.lists_container}>
    <caption className={styles.caption}>Teachers List
       <Link to="/Admin/AddTeacher">
          <button >Add Teacher</button>
        </Link>
       </caption>
       <table className={styles.table}>
     
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((s) => (
          
            <tr key={s.id} className={styles.tr}>
              <td className={styles.td}>{s.id}</td>
              <td className={styles.td}>{s.name}</td>
              <td className={styles.td}>{s.email}</td>
              <td className={styles.td}>{s.age}</td>
              <td className={styles.td}>{s.gender}</td>
              <td className={styles.td}><button className={styles.delete} onClick={()=>{HandleDelete(s)}}><MdDelete /></button><button className={styles.edit} ><FaEdit /></button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pageBtnContainer}> 
          <button onClick={HandlePrevsPage}>Prev</button><p>{currentPage}</p><button onClick={HandleNextPage}>Next</button>
        </div>
      
    </div>
    </>
  )
}
