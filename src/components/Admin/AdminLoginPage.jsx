import React from "react";
import { useAtom } from "jotai";
import styles from './admin.module.css';
import { adminLoginEmailAtom, adminLoginPasswordAtom, adminStatus } from "../jotai";
import { admins } from "../data";

export default function Admin() {
  const [email, setEmail] = useAtom(adminLoginEmailAtom);
  const [password, setPassword] = useAtom(adminLoginPasswordAtom);
  const [AdminLoginStatus, setAdminLoginStatus] = useAtom(adminStatus);

  function checkData(event) {
    event.preventDefault();

    const admin = admins.find(
      (t) => t.email === email && t.password === password
    );

    if (admin) {
      setAdminLoginStatus(true);
      alert("admin login sucessfully");
    } else {
      alert("invalid");
    }
  }

  return (
    <div className={styles.adminLogin}>
      <form id={styles.adminForm} onSubmit={checkData}>
        <div className={styles.title}>Admin Login</div>
        <div className={styles.inputContainer}>
          <div className={styles.inputDiv}>
            <div>Enter email</div>
            <input
              type="email"
              name="email"
              className={styles.emailId}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputDiv}>
            <div>Password</div>
            <input
              type="password"
              name="password"
              className={styles.password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
