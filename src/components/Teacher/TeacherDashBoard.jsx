import React from "react";
import styles from "./teacher.module.css";
import Students from "../Students";
import { useAtom } from "jotai";
import { ClassAtom, StudentAtom } from "../jotai";
import { classCode } from "../data";


export default function TeacherDashBoard() {
  
  const [Class, setClass] = useAtom(ClassAtom);
  const [students, setStudents] = useAtom(StudentAtom);

 

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button className={styles.class} onClick={()=>setClass(classCode.eight)}>8th class</button>
        <button className={styles.class} onClick={()=>setClass(classCode.nine)}>9th class</button>
        <button className={styles.class} onClick={()=>setClass(classCode.ten)}>10th class</button>
      </div>
      <div className={styles.studentContainer}>
        <Students />
      </div>
    </div>
  );
}
