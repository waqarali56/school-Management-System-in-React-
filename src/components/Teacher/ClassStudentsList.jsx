import React, { useEffect, useState } from 'react';

import styles from './teacher.module.css';
import{useAtom} from 'jotai';
import { attendanceRecordsAtom, showClassAtom, StudentAtom, teachersAtom, teacherStatus } from '../jotai';





export default function StudentsList() {
  
  const loginTeacherEmail = localStorage.getItem("loginTeacherEmail");
  const [date, setDate] = useState("");


  const [students, setStudents] = useAtom(StudentAtom);
  const [teachers, setTeachers] = useAtom(teachersAtom);
  const [attendanceRecords, setAttendanceRecords] = useAtom(attendanceRecordsAtom);

 

  useEffect(() => {
    // Set today's date as the default value
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);





  const loginTeacherData = teachers.find(
    (teacher) => teacher.email === loginTeacherEmail
  ) || {};
  const studentsOfClass=students.filter(student => student.classCode === loginTeacherData.assignClass)

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const totalPages=Math.ceil((studentsOfClass.length)/(itemPerPage));
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = (currentPage) * itemPerPage;
  
  
  const [todayAttendance,setTodayAttendance]=useState( {
    date:date,
    classCode: loginTeacherData.assignClass,
    teacherId: loginTeacherData.id, 
    attendance: studentsOfClass.map((s)=>(
      { registrationNumber: s.registrationNumber,  name: s.name, status: "absent"}
    ))
  })
  useEffect(() => {
    setTodayAttendance({
      date: date,
      classCode: loginTeacherData.assignClass,
      teacherId: loginTeacherData.id,
      attendance: studentsOfClass.map((s) => ({
        registrationNumber: s.registrationNumber,
        name: s.name,
        status: "absent"
      }))
    });
  }, [date]);

  const rows = todayAttendance.attendance.slice(startIndex, endIndex);

  function submitAttendence()
  { 
    const recordExists = attendanceRecords.some(
      (r) => r.date === todayAttendance.date && r.classCode===todayAttendance.classCode
    );

    

     // Create a new array that includes the existing attendance records and the new one
     
     if(!recordExists)
     {    const updatedAttendanceRecords = [...attendanceRecords, todayAttendance];
    console.dir(updatedAttendanceRecords);
    // Update the state with the new array
    setAttendanceRecords(updatedAttendanceRecords);
    alert("Today attendence has been sucessfully Submitted");
     }
     else
     {
      alert("Error! Today attendence already Exist");
     }
  }

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
    setTodayAttendance((prevAttendanceRecord) => ({
      ...prevAttendanceRecord,
      attendance: prevAttendanceRecord.attendance.map((s) =>
        s.registrationNumber === regNumber
          ? { ...s, status: s.status === "absent" ? "present" : "absent" }
          : s
      ),
    }));
  };
  

  return (
    <div className={styles.attendenceBox}>
      <div>
      <div className={styles.caption}>

        <div><button className={styles.submit_btn} onClick={submitAttendence}>Submit</button></div>
         
         <form className={styles.attendanceForm}>
           <label htmlFor="attendenceDate">Set Attendence Date</label>
           <input
             type="date"
             id="attendenceDate"
             name="attendenceDate"
             value={date}
             onChange={(e) => setDate(e.target.value)}
           />
         </form>
   
     </div>
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
       {rows.map((s) => (
       
         <tr key={s.registrationNumber} className={styles.tr}>
           <td className={styles.td}>{s.registrationNumber}</td>
           <td className={styles.td}>{s.name}</td>
           
           <td className={styles.td}>{loginTeacherData.assignClass}</td>
           <td className={styles.td}>
             <button
               className={`${styles.button} ${s.status==="absent" ? styles.buttonAbsent : ''}`}
               onClick={() => toggleAttendance(s.registrationNumber)}
             >
               {s.status==="present" ? 'Mark Absent' : 'Mark Present'}
             </button>
           </td>
         </tr>
       ))}
     </tbody>
   </table>
      </div>
     
      <div className={styles.pageBtnContainer}> 
          <button onClick={HandlePrevsPage}>Prev</button><p>{currentPage}</p><button onClick={HandleNextPage}>Next</button>
        </div>
    </div>
  );
}
