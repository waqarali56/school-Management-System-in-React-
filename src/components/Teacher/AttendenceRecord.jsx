import React from 'react'
import { attendanceRecordsAtom, teachersAtom } from '../jotai';
import { useAtom } from 'jotai';
import styles from "./teacher.module.css";

export default function AttendenceRecord() {

    const [attendanceRecords, setAttendanceRecords] = useAtom(attendanceRecordsAtom);
    const [teachers, setTeachers] = useAtom(teachersAtom);

    const loginTeacherEmail = localStorage.getItem("loginTeacherEmail");

    const loginTeacherData =
      teachers.find((teacher) => teacher.email === loginTeacherEmail) || {};



    const RecordOfClass=attendanceRecords.filter(r => r.classCode === loginTeacherData.assignClass)


  return (
    <div>
        
    {RecordOfClass.map((record, index) => (
      <div key={index} className={styles.attendanceRecordDiv}>
        <h2 className={styles.dateDiv}>Date: {record.date}</h2>
        <table className={styles.table}>
          <thead  className={styles.thead}>
            <tr  className={styles.tr}>
              <th  className={styles.th}>Registration Number</th>
              <th  className={styles.th}>Class</th>
              <th  className={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {record.attendance.map((entry, idx) => (
              <tr className={styles.tr}  key={idx}>
                <td className={styles.td}>{entry.registrationNumber}</td>
                <td className={styles.td}>{loginTeacherData.assignClass}</td>
                <td className={styles.td}>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
  )
}
