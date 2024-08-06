import React from "react";
import { useAtom } from "jotai";
import TeacherLoginPage from "./TeacherLoginPage.jsx";
import TeacherDashBoard from "./TeacherDashBoard.jsx";
import { ClassAtom, teacherStatus } from "../jotai.js";
import styles from "./teacher.module.css";

export default function Teacher() {
  const [teacherLoginStatus, setTeacherLoginStatus] = useAtom(teacherStatus);
  const [Class, setClass] = useAtom(ClassAtom);

  return (
 
      
      <div>
        {teacherLoginStatus === false ? (
          <TeacherLoginPage />
        ) : (
          <TeacherDashBoard />
        )}
      </div>
  );
}
