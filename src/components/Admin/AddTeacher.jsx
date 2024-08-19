import React, { useState } from 'react'
import styles from './admin.module.css';
import { classesAtom, teachersAtom } from '../jotai';
import { useAtom } from 'jotai';



export default function AddTeacher() {

  const [teachers, setTeachers] = useAtom(teachersAtom);

  const [classes, setClasses] = useAtom(classesAtom);
  const freeClasses=classes.filter(c => c.assignedTeacherId === null)

  const [teacherObject, setTeacherObject] = useState({
    name: "",
    id: "",
    email: "",
    password:'',
    age: "",
    gender: "",
    assignClass:''
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
  function HandleAssignClass(e) {
    
    setTeacherObject({ ...teacherObject, assignClass:e.target.value});

  }

  function HandlePassword(e)
  {
    setTeacherObject({ ...teacherObject, password:e.target.value});
  }
  

  function PushTeacher(e) {
    e.preventDefault();

    const selectedClass = freeClasses.find(c => c.classCode === teacherObject.assignClass);

    if (selectedClass) {
      selectedClass.assignedTeacherId = teacherObject.id;
      
      // Update the classes atom
      const updatedClasses = classes.map(c => 
        c.classCode === selectedClass.classCode ? selectedClass : c
      );
      setClasses(updatedClasses);
    }
    
    const existingTeacher = teachers.find(
      (existingTeacher) =>
        existingTeacher.id === teacherObject.id ||
        existingTeacher.email === teacherObject.email
    );
    
    if (existingTeacher) {
      alert("Teacher already exists. Please use a unique ID or email.");
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

      <label for="password">password:</label>
      <input type="password" id='password' name="password"  onChange={HandlePassword} required />

      <label for="assignClass">Assign Class:</label>
      <select id="assignClass" name="assignClass"  onChange={HandleAssignClass}  required>
        <option value="">Select Code</option>
        {freeClasses.map((f,index)=>(<option key={index} value={f.classCode}>{f.classCode}</option>))}
      </select>


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
