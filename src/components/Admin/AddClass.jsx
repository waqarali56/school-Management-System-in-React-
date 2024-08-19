import React, { useState } from 'react'
import styles from './admin.module.css';
import { classesAtom } from '../jotai';
import { useAtom } from 'jotai';

export default function AddClass() {
    const [classes, setClasses] = useAtom(classesAtom);
   const [classObject,setClassObject]=useState({grade:'',classCode:'',section:'',assignedTeacherId:null})

    function handleGrade(e)
    {
        setClassObject({...classObject,grade:e.target.value})
    }

    function handleClassCode(e)
    {
        setClassObject({...classObject,classCode:e.target.value})
    }

    function handleSection(e)
    {
        setClassObject({...classObject,section:e.target.value})
    }

    function pushObject(e)
    {
        e.preventDefault(); 
        

    const existingClass = classes.find(existingClass => existingClass.classCode === classObject.classCode);

    if (existingClass) {
        alert("Class already exists. Cannot add duplicate.");
    } else {
        setClasses([...classes, classObject]);
        alert("Class added successfully.");
    }
    }

  return (
    <div className={styles.form_container}>
        
    <h2>Add Class</h2>
    <form action="/add-class" method="POST" onSubmit={pushObject}>
      <label for="grade">Grade:</label>
      <input type="text" id="grade"  onChange={handleGrade} name="grade" required />

      <label for="section">Section:</label>
      <input type="text" id="section" onChange={handleSection} name="section" required />

      <label for="classCode">ClassCode:</label>
      <input type="text" id="classCode"  onChange={handleClassCode} name="classCode" required />

      <input type="submit" value="Add Class" />
    </form>
  </div>
  )
}
