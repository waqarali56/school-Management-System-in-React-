import React from "react";
import styles from "./teacher.module.css";
import { teachers } from "../data.js";
import { useAtom } from "jotai";
import { loginEmailAtom, loginPasswordAtom, teacherStatus } from "../jotai.js";

export default function TeacherLoginPage() {
  const [email, setEmail] = useAtom(loginEmailAtom);
  const [password, setPassword] = useAtom(loginPasswordAtom);
  const [teacherLoginStatus, setTeacherLoginStatus] = useAtom(teacherStatus);

  function checkData(event) {
    event.preventDefault();

    const teacher = teachers.find(
      (t) => t.email === email && t.password === password
    );

    if (teacher) {
      setTeacherLoginStatus(true);
      alert("teacher login sucessfully");
    } else {
      alert("invlid");
    }
  }

  return (
    <div>
      <div className={styles.userLogin}>
        <form id={styles.userForm} onSubmit={checkData}>
          <div className={styles.title}>Teacher Login</div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDiv}>
              <div>Enter email</div>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.emailId}
                required
              />
            </div>
            <div className={styles.inputDiv}>
              <div>Password</div>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.password}
                required
              />
            </div>
            <div className={styles.submit}>
              <input type="submit" name="submit"  />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
