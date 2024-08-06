import React, { useState } from 'react'
import styles from './admin.module.css';
import { classesAtom } from '../jotai';
import { useAtom } from 'jotai';

export default function AddClass() {
    const [classes, setClasses] = useAtom(classesAtom);
   const [classObject,setClassObject]=useState({class:'',class_code:'',section:'',no_of_students:0})

    function handleClass(e)
    {
        setClassObject({...classObject,class:e.target.value})
    }

    function handleClassCode(e)
    {
        setClassObject({...classObject,class_code:e.target.value})
    }

    function handleSection(e)
    {
        setClassObject({...classObject,section:e.target.value})
    }

    function pushObject(e)
    {
        e.preventDefault(); 
        

    const existingClass = classes.find(existingClass => existingClass.class_code === classObject.class_code);

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
      <label for="class">Class:</label>
      <input type="text" id="class"  onChange={handleClass} name="class" required />

      <label for="section">Section:</label>
      <input type="text" id="section" onChange={handleSection} name="section" required />

      <label for="classCode">ClassCode:</label>
      <input type="text" id="classCode"  onChange={handleClassCode} name="classCode" required />

      <input type="submit" value="Add Class" />
    </form>
  </div>
  )
}
