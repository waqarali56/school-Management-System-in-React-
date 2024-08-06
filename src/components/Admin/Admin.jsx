import React, { Children } from "react";
import { adminStatus } from "../jotai";
import { useAtom } from "jotai";
import AdminLoginPage from "./AdminLoginPage";
import AdminDashBoard from "./AdminDashBoard";
import styles from "./admin.module.css";
import { Link, Outlet } from "react-router-dom";
import TeachersList from "./TeachersList";
import StudentsList from "./StudentsList";
import { Route, Routes } from "react-router-dom";

export default function Admin() {
  const [adminLoginStatus, setAdminLoginStatus] = useAtom(adminStatus);

  return (
    
      <>
        {adminLoginStatus === false ? (
          <AdminLoginPage />
        ) : (
          <AdminDashBoard>
            <Outlet /> {/* This renders the nested routes */}
          </AdminDashBoard>
        )}
      </>
    
  );
}
