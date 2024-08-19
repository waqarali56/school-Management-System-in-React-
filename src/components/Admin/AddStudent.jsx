import React, { useState } from "react";
import styles from "./admin.module.css";
import { useAtom } from "jotai";
import { classesAtom, StudentAtom } from "../jotai";
import { classCode } from "../data";

export default function AddStudent() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [classes, setClasses] = useAtom(classesAtom);
  const [studentObject, setStudentObject] = useState({
    name: "",
    registrationNumber: "",
    classCode: "",
    age: "",
    gender: "",
    email:'',
    password:''
  });

  function HandleName(e) {
    setStudentObject({ ...studentObject, name: e.target.value });
  }
  function HandleID(e) {
    setStudentObject({ ...studentObject, registrationNumber: e.target.value });
  }

  function HandleGender(e) {
    setStudentObject({ ...studentObject, gender: e.target.value });
  }

  function HandleAge(e) {
    setStudentObject({ ...studentObject, age: e.target.value });
  }
  function HandleClassCode(e) {
    setStudentObject({ ...studentObject, classCode: e.target.value });
  }

  function HandleEmail(e) {
    setStudentObject({ ...studentObject, email: e.target.value });
  }
 
  function HandlePassword(e)
  {
    setStudentObject({ ...studentObject, password:e.target.value});
  }

  function PushStudent(e) {
    e.preventDefault();

   

    const existingStudent = students.find(
      (existingStudent) =>
        existingStudent.registrationNumber === studentObject.registrationNumber ||
      existingStudent.email === studentObject.email
    );
    
    if (existingStudent) {
      alert("Student already exists. Please use a unique ID or email.");
    } else {
      setStudents([...students, studentObject]);
      alert("Student added successfully.");
    }
  }

  return (
    <div className={styles.form_container}>
      <h2>Add Student</h2>
      <form action="/add-student" method="POST" onSubmit={PushStudent}>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={HandleName}
          required
        />

        <label for="student_id">ID:</label>
        <input
          type="text"
          id="std_id"
          name="student_id"
          onChange={HandleID}
          required
        />
        <label for="name">Email:</label>
        <input type="email" id="email" name="email"  onChange={HandleEmail} required />

         <label for="password">Password:</label>
         <input type="password" id='password' name="password"  onChange={HandlePassword} required />

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" onChange={HandleGender} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label for="student_age">Age:</label>
        <input
          type="number"
          id="age"
          name="student_age"
          onChange={HandleAge}
          required
        />

        <label for="gender">ClassCode:</label>
        <select id="class" name="class" onChange={HandleClassCode} required>
          <option value="">Select Code</option>
          {classes.map((c)=>(<option value={c.classCode}>{c.classCode}</option>))}
        </select>

        <input type="submit" value="Add Student" />
      </form>
    </div>
  );
}
