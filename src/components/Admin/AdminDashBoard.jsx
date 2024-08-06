import React from "react";
import styles from "./admin.module.css";

import { Link,Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { adminLoginStatus } from "../jotai";

export default function AdminDashBoard() {

  const [adminLogin, setAdminLogin] = useAtom(adminLoginStatus);



  return (


    <div className={styles.admin_body}>
      <div className={styles.navbar}>
        <Link to="/Admin/ClassList">
          <button className={styles.item}>Classes</button>
        </Link>
        <Link to="/Admin/Teacherslist">
          <button className={styles.item}>Teachers</button>
        </Link>

        <Link to="/Admin/StudentsList">
          <button className={styles.item}>Students</button>
        </Link>
      </div>

      <div className={styles.container}>
      <Outlet />
      </div>
    </div>
  );
}
