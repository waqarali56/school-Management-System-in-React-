import React from 'react';
import { attendanceRecordsAtom, StudentAtom } from '../jotai';
import { useAtom } from 'jotai';
import styles from './student.module.css';

export default function StudentDashBoard() {
  const [students] = useAtom(StudentAtom);
  const loginStudentEmail = localStorage.getItem("loginStudentEmail");
  const [attendanceRecords] = useAtom(attendanceRecordsAtom);

  const loginStudentData = students.find((s) => s.email === loginStudentEmail) || {};

  // Filter attendance records for the student's class
  const matchingRecords = attendanceRecords.filter(
    (r) => r.classCode === loginStudentData.classCode
  );

  // Check each record to see if the student is present
  const presentInAttendance = matchingRecords.flatMap((record) =>
    record.attendance.filter(
      (entry) => entry.registrationNumber === loginStudentData.registrationNumber && entry.status === "present"
    )
  );

  const totalAttendance = matchingRecords.flatMap((record) => 
    record.attendance.filter(entry => entry.registrationNumber === loginStudentData.registrationNumber)
  ).length;

  const presentCount = presentInAttendance.length;

  // Prevent division by zero
  const runningAttendance = totalAttendance > 0 ? (presentCount / totalAttendance) * 100 : 0;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Welcome, {loginStudentData.name}</h2>
      </header>

      <div className={styles.profileBox}>
        <h2 className={styles.name}>Name: {loginStudentData.name}</h2>
        <ul className={styles.infoList}>
          <li>Reg # : {loginStudentData.registrationNumber}</li>
          <li>Email: {loginStudentData.email}</li>
          <li>Class: {loginStudentData.classCode}</li>
          <li>Running Attendance: {runningAttendance.toFixed(2)}%</li>
        </ul>
      </div>
    </div>
  );
}
