import React, { useState } from 'react';

import styles from './Teacher/teacher.module.css';
import{useAtom} from 'jotai';
import { ClassAtom, StudentAtom } from './jotai';



export default function Students() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [Class, setClass] = useAtom(ClassAtom);

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
      <h2 >{Class}</h2>
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
          {students.filter(student => student.class === Class).map((s) => (
          
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
    </div>
  );
}
