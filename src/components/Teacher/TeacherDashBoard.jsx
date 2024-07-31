import React,{useEffect}from "react";
import styles from "./teacher.module.css";
import Students from "../Students";
import { useAtom } from "jotai";
import { ClassAtom, StudentAtom, StudentOfClass } from "../jotai";

export default function TeacherDashBoard() {
  const [class1, setclass1] = useAtom(ClassAtom);
  const [studentOfClass, setStudentOfClass] = useAtom(StudentOfClass);
  const [students, setStudents] = useAtom(StudentAtom);

  useEffect(() => {
    
    setStudentOfClass( students.filter(student => student.class === class1));
  
  }, [class1]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button className={styles.class} onClick={()=>setclass1('8th')}>8th class</button>
        <button className={styles.class} onClick={()=>setclass1('9th')}>9th class</button>
        <button className={styles.class} onClick={()=>setclass1('10th')}>10th class</button>
      </div>
      <div className={styles.studentContainer}>
        <Students />
      </div>
    </div>
  );
}
