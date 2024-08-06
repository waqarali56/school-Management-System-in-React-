import React, { useState } from 'react';

import styles from './teacher.module.css';
import{useAtom} from 'jotai';
import { ClassAtom, StudentAtom, teacherStatus } from '../jotai';




export default function StudentsList() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [Class, setClass] = useAtom(ClassAtom);

  const studentsOfClass=students.filter(student => student.class === Class)

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;
  const totalPages=(studentsOfClass.length)/(itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = (currentPage) * itemPerPage;
  const rows = studentsOfClass.slice(startIndex, endIndex);

  

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
  
  
  


  const toggleAttendance = (regNumber) => {
    setStudents((prevStudents) =>
      prevStudents.map((s) =>
        s.registrationNumber === regNumber
          ? { ...s, present: !s.present }
          : s
      )
    );
  };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Reg #</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Class</th>
            <th className={styles.th}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {studentsOfClass.map((s) => (
          
            <tr key={s.registrationNumber} className={styles.tr}>
              <td className={styles.td}>{s.registrationNumber}</td>
              <td className={styles.td}>{s.name}</td>
              <td className={styles.td}>{s.class}</td>
              <td className={styles.td}>
                <button
                  className={`${styles.button} ${!s.present ? styles.buttonAbsent : ''}`}
                  onClick={() => toggleAttendance(s.registrationNumber)}
                >
                  {s.present ? 'Mark Absent' : 'Mark Present'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pageBtnContainer}> 
          <button onClick={HandlePrevsPage}>Prev</button><p>{currentPage}</p><button onClick={HandleNextPage}>Next</button>
        </div>
    </div>
  );
}
