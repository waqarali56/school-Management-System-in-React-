import React from "react";
import styles from "./admin.module.css";

import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { adminStatus } from "../jotai";

export default function AdminDashBoard({ children }) {

  const [adminLoginStatus, setAdminLoginStatus] = useAtom(adminStatus);



  return (


    <div className={styles.admin_body}>
      <div className={styles.navbar}>
        <Link to="/Admin/ClassList">
          <button className={styles.item}>Classes</button>
        </Link>
        <Link to="/Admin/Teachers">
          <button className={styles.item}>Teachers</button>
        </Link>

        <Link to="/Admin/Students">
          <button className={styles.item}>Students</button>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2>Admin Pannel</h2>
            
            {adminLoginStatus ? (
              <Link to="/Home">
                <button onClick={() => setAdminLoginStatus(false)}>
                  Log Out
                </button>
              </Link>
            ) : null}
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
