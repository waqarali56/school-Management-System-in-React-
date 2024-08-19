import React from "react";
import styles from "../app.module.css";
import { adminLoginStatus, loginEmailAtom, loginPasswordAtom, studentLoginStatus, teacherLoginStatus } from "./jotai.js";
import { useAtom } from "jotai";
import { teachers, students, admins } from "./data.js";
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();
  const [password, setPassword] = useAtom(loginPasswordAtom);
  const [email, setEmail] = useAtom(loginEmailAtom);

  const [teacherLogin, setTeacherLogin] = useAtom(teacherLoginStatus);
  const [adminLogin, setAdminLogin] = useAtom(adminLoginStatus);
  const [studentLogin, setStudentLogin] = useAtom(studentLoginStatus);

  function checkData(event) {
    event.preventDefault();

    const teacher = teachers.find(
      (t) => t.email.includes('@teacher') && t.email === email && t.password === password
    );
    const admin = admins.find(
      (t) => t.email.includes('@admin') && t.email === email && t.password === password
    );

    const student = students.find(
      (t) => t.email.includes('@student') && t.email === email && t.password === password
    );

    if (teacher) {
      setTeacherLogin(true);
      alert("Teacher login successful");
      localStorage.setItem("loginTeacherEmail",email);
      navigate('/TeacherDashBoard');
    } else if (admin) {
      setAdminLogin(true);
      alert("Admin login successful");
      localStorage.setItem("loginAdminEmail",email);
      navigate('/Admin');
    } else if (student) {
      setStudentLogin(true);
      alert("Student login successful");
      localStorage.setItem("loginStudentEmail",email);
      navigate('/Student');
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div>
      {(!teacherLogin && !studentLogin && !adminLogin) ? (
        <div className={styles.userLogin}>
          <form id={styles.userForm} onSubmit={checkData}>
            <div className={styles.title}>Login</div>
            <div className={styles.inputContainer}>
              <div className={styles.inputDiv}>
                <div>Enter email</div>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailId}
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <div>Password</div>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.password}
                  required
                />
              </div>
              <div className={styles.submit}>
                <input type="submit" name="submit" />
              </div>
            </div>
          </form>
        </div>
      ) : null}

    </div>
  );
}
