import React from "react";
import styles from "./teacher.module.css";
import ClassStudentsList from "./ClassStudentsList";
import { useAtom } from "jotai";
import { ClassAtom, StudentAtom, teacherStatus } from "../jotai";
import { classCode } from "../data";
import { Link } from "react-router-dom";

export default function TeacherDashBoard() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [Class, setClass] = useAtom(ClassAtom);
  const [teacherLoginStatus, setTeacherLoginStatus] = useAtom(teacherStatus);

  return (
    <div className={styles.teacher_body}>
      
      <div className={styles.navbar}>
          <button
            className={styles.item}
            onClick={() => setClass(classCode.eight)}
          >
            8th class
          </button>
          <button
            className={styles.item}
            onClick={() => setClass(classCode.nine)}
          >
            9th class
          </button>
          <button
            className={styles.item}
            onClick={() => setClass(classCode.ten)}
          >
            10th class
          </button>
        </div>
      <div className={styles.container}>
      <div className={styles.header}>
        <h2>Teacher Pannel</h2>
        <h2>{Class}</h2>
        {teacherLoginStatus ? (
          <Link to="/Home">
            <button onClick={() => setTeacherLoginStatus(false)}>
              Log Out
            </button>
          </Link>
        ) : null}
      </div>
        <div className={styles.innerContainer}>
          <ClassStudentsList />
        </div>
      </div>
    </div>
  );
}
