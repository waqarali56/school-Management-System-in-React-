import React from "react";
import styles from "./teacher.module.css";
import ClassStudentsList from "./ClassStudentsList";
import { useAtom } from "jotai";
import { ClassAtom, StudentAtom, teacherLoginStatus } from "../jotai";
import { classCode } from "../data";
import { Link } from "react-router-dom";

export default function TeacherDashBoard() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [Class, setClass] = useAtom(ClassAtom);
  const [teacherLogin, setTeacherLogin] = useAtom(teacherLoginStatus);

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

        <div className={styles.innerContainer}>
          <ClassStudentsList />
        </div>
      </div>
    </div>
  );
}
