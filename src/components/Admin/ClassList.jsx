import { useAtom } from 'jotai';
import React from 'react';
import { classesAtom } from '../jotai';
import styles from './admin.module.css';
import { Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";




export default function ClassList() {

  const [classes, setClasses] = useAtom(classesAtom);

  function HandleDelete(object)
  {
     let Newclasses=classes.filter(c=>c.class_code!==object.class_code);
     setClasses(Newclasses);
  }

  return (
    
        <>
      
    <div className={styles.lists_container}>
        <table className={styles.table}>
        <caption className={styles.caption}>Class List</caption>
        <thead className={styles.thead}>
          <tr>
          <th className={styles.th}>ClassCode</th>
            <th className={styles.th}>Class</th>
            <th className={styles.th}>Section</th>
            <th className={styles.th}>No. of Students</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((s) => (
          
            <tr key={s.registrationNumber} className={styles.tr}>
              <td className={styles.td}>{s.class_code}</td>
              <td className={styles.td}>{s.class}</td>
              <td className={styles.td}>{s.section}</td>
              <td className={styles.td}>{s.no_of_students}</td>
              <td className={styles.td}><button className={styles.delete} onClick={()=>{HandleDelete(s)}}><MdDelete /></button><button className={styles.edit}><FaEdit /></button></td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <div className={styles.addButtonContainer}>
     <Link to="/Admin/AddClass">
     <button>Add Class</button>
   </Link>
     </div>
     </>
    
  )
}
