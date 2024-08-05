import React from 'react'
import styles from './admin.module.css';
import{useAtom} from 'jotai';
import { ClassAtom, StudentAtom, teacherStatus } from '../jotai';
import { Link, Outlet } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function StudentsList() {


  const [students, setStudents] = useAtom(StudentAtom);

  function HandleDelete(object)
  {
     let NewStudents=students.filter(s=>s.registrationNumber!==object.registrationNumber);
     setStudents(NewStudents);
  }


  return (
    <>
    <div className={styles.lists_container}>
        <table className={styles.table}>
        <caption className={styles.caption}>Students List</caption>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Reg #</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Class</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
          
            <tr key={s.registrationNumber} className={styles.tr}>
              <td className={styles.td}>{s.registrationNumber}</td>
              <td className={styles.td}>{s.name}</td>
              <td className={styles.td}>{s.class}</td>
              <td className={styles.td}>{s.gender}</td>
              <td className={styles.td}>{s.age}</td>
              <td className={styles.td}><button className={styles.delete} onClick={()=>{HandleDelete(s)}}><MdDelete /></button><button className={styles.edit}><FaEdit /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <div className={styles.addButtonContainer}>
     <Link to="/Admin/AddStudent">
     <button>Add Student</button>
   </Link>
     </div>
     </>
    
  )
}
