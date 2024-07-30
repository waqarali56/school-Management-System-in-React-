import React from "react";
import styles from "./main.module.css";


export default function Admin() {
  return (
    <div className={styles.adminLogin}>
      <form id={styles.adminForm}>
        <div className={styles.title}>Admin Login</div>
        <div className={styles.inputContainer}>
          <div className={styles.inputDiv}>
            <div>Enter email</div>
            <input
              type="email"
              name="email"
              className={styles.emailId}
              required=""
            />
          </div>
          <div className={styles.inputDiv}>
            <div>Password</div>
            <input
              type="password"
              name="password"
              className={styles.password}
              required=""
            />
          </div>
          <div className={styles.submit}>
            <input type="submit" name="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
