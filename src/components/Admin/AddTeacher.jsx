import React, { useState } from 'react'
import styles from './admin.module.css';
import { teachersAtom } from '../jotai';
import { useAtom } from 'jotai';



export default function AddTeacher() {

  const [teachers, setTeachers] = useAtom(teachersAtom);
  const [teacherObject, setTeacherObject] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    gender: "",
  });

  function HandleName(e) {
    setTeacherObject({ ...teacherObject, name: e.target.value });
  }
  function HandleID(e) {
    setTeacherObject({ ...teacherObject, id: e.target.value });
  }

  function HandleGender(e) {
    setTeacherObject({ ...teacherObject, gender: e.target.value });
  }

  function HandleAge(e) {
    setTeacherObject({ ...teacherObject, age: e.target.value });
  }
  function HandleEmail(e) {
    setTeacherObject({ ...teacherObject, email: e.target.value });
  }

  function PushTeacher(e) {
    e.preventDefault();

    const existingTeacher = teachers.find(
      (existingTeacher) =>
        existingTeacher.id === teacherObject.id
    );

    if (existingTeacher) {
      alert("Teacher already exists. Cannot add duplicate.");
    } else {
      setTeachers([...teachers, teacherObject]);
      alert("Teacher added successfully.");
    }
  }

  return (
    
    <div className={styles.form_container}>
        
    <h2>Add Teacher</h2>
    <form action="/add-teacher" method="POST" onSubmit={PushTeacher}>

    <label for="teacher_id">ID:</label>
    <input type="text" id="teacher_id" name="teacher_id" onChange={HandleID} required />

      <label for="name">Name:</label>
      <input type="text" id="name" name="name" onChange={HandleName} required />

      <label for="name">Email:</label>
      <input type="email" id="email" name="email"  onChange={HandleEmail} required />

      <label for="teacher_age">Age:</label>
      <input type="number" id="teacher_age" name="teacher_age"  onChange={HandleAge} required />

     

      <label for="gender">Gender:</label>
      <select id="gender" name="gender"  onChange={HandleGender}  required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input type="submit" value="Add Teacher" />
    </form>
  </div>
  
  )
}
