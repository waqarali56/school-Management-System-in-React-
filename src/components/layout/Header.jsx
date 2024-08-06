import React from "react";
import styles from "./layout.module.css";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  adminLoginStatus,
  studentLoginStatus,
  teacherLoginStatus,
} from "../jotai";
import { useAtom } from "jotai";

export default function Header() {
  const [teacherLogin, setTeacherLogin] = useAtom(teacherLoginStatus);
  const [adminLogin, setAdminLogin] = useAtom(adminLoginStatus);
  const [studentLogin, setStudentLogin] = useAtom(studentLoginStatus);

  return (
    <header id={styles.header}>
      <div className={styles.logoTitle}>
        <FaSchool className={styles.logo} />
        <div>KPS</div>
      </div>

      {adminLogin ? (
       
         <>
       
            <h2>Admin Pannel</h2>

            {adminLogin ? (
              <Link to="/">
                <button onClick={() => setAdminLogin(false)}>Log Out</button>
              </Link>
            ) : null}
            </>
      
      ) : teacherLogin ? (
       <>
          <h2>Teacher Pannel</h2>
          {teacherLogin ? (
            <Link to="/">
              <button onClick={() => setTeacherLogin(false)}>Log Out</button>
            </Link>
          ) : null}
        </>
      ) : studentLogin ? (
        <>
          <h2>Student Pannel</h2>
          {studentLogin ? (
            <Link to="/">
              <button onClick={() => setStudentLogin(false)}>Log Out</button>
            </Link>
          ) : null}
        </>
        
      ) : null}
    </header>
  );
}
