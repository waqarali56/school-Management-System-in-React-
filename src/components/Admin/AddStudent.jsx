import React, { useState } from "react";
import styles from "./admin.module.css";
import { useAtom } from "jotai";
import { StudentAtom } from "../jotai";

export default function AddStudent() {
  const [students, setStudents] = useAtom(StudentAtom);
  const [studentObject, setStudentObject] = useState({
    name: "",
    registrationNumber: "",
    class: "",
    age: "",
    gender: "",
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
  function HandleClass(e) {
    setStudentObject({ ...studentObject, class: e.target.value });
  }

  function PushStudent(e) {
    e.preventDefault();

    const existingStudent = students.find(
      (existingStudent) =>
        existingStudent.registrationNumber === studentObject.registrationNumber
    );

    if (existingStudent) {
      alert("Class already exists. Cannot add duplicate.");
    } else {
      setStudents([...students, studentObject]);
      alert("Class added successfully.");
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

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" onChange={HandleGender} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label for="student_id">Age:</label>
        <input
          type="number"
          id="age"
          name="student_age"
          onChange={HandleAge}
          required
        />

        <label for="gender">Class:</label>
        <select id="class" name="class" onChange={HandleClass} required>
          <option value="">Select Class</option>
          <option value="9th">9th</option>
          <option value="female">10th</option>
          <option value="other">11th</option>
          <option value="other">12th</option>
        </select>

        <input type="submit" value="Add Student" />
      </form>
    </div>
  );
}
