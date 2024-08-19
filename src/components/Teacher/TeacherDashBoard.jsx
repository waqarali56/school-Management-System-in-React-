import React, { useEffect, useState } from "react";
import styles from "./teacher.module.css";
import ClassStudentsList from "./ClassStudentsList";
import { useAtom } from "jotai";
import {
  classesAtom,
  loginEmailAtom,
  showClassAtom,
  StudentAtom,
  teacherLoginStatus,
  teachersAtom,
} from "../jotai";
import { classCode } from "../data";
import { Link, Outlet } from "react-router-dom";
export default function TeacherDashBoard() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [classes, setClasses] = useAtom(classesAtom);
  const [teachers, setTeachers] = useAtom(teachersAtom);

  const [showBtn, setShowBtn] = useState(true);

  const loginTeacherEmail = localStorage.getItem("loginTeacherEmail");

  const loginTeacherData =
    teachers.find((teacher) => teacher.email === loginTeacherEmail) || {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Welcome {loginTeacherData.name}</h2>
        </div>

        {showBtn ? (
          <Link
            to="/TeacherDashBoard/AttendenceRecord"
            onClick={() => setShowBtn(false)}
          >
            <button className={styles.attendenceRecordBtn}>
              Attendence Record
            </button>
          </Link>
        ) : (
          <Link to="/TeacherDashBoard/" onClick={() => setShowBtn(true)}>
            <button className={styles.backBtn}>Back</button>
          </Link>
        )}
      </div>

      <div className={styles.innerContainer}>
        <Outlet />
      </div>
    </div>
  );
}
