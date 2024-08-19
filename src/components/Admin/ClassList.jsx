import { useAtom } from "jotai";
import React, { useState } from "react";
import { classesAtom, StudentAtom } from "../jotai";
import styles from "./admin.module.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function ClassList() {
  const [classes, setClasses] = useAtom(classesAtom);
  const [students, setStudents] = useAtom(StudentAtom);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const totalPages = Math.ceil(classes.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = currentPage * itemPerPage;
  const rows = classes.slice(startIndex, endIndex);


  const countNumberofStudents = (classCode) => {
    return students.filter(student => student.classCode === classCode).length;
  };

  function HandleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function HandlePrevsPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function HandleDelete(object) {
    let Newclasses = classes.filter((c) => c.classCode !== object.classCode);
    setClasses(Newclasses);
  }

  return (
    <>
      <div className={styles.lists_container}>
        <caption className={styles.caption}>
          <h3>Class List</h3>
          <Link to="/Admin/AddClass">
            <button>Add Class</button>
          </Link>
        </caption>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>ClassCode</th>
              <th className={styles.th}>Class</th>
              <th className={styles.th}>Section</th>
              <th className={styles.th}>No. of Students</th>
              <th className={styles.th}>Assigned TeacherID</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.classCode} className={styles.tr}>
                <td className={styles.td}>{s.classCode}</td>
                <td className={styles.td}>{s.grade}</td>
                <td className={styles.td}>{s.section}</td>
                <td className={styles.td}>{countNumberofStudents(s.classCode)}</td>
                <td className={styles.td}>{s.assignedTeacherId === null ? 'none' : s.assignedTeacherId}</td>
                <td className={styles.td}>
                  <button
                    className={styles.delete}
                    onClick={() => {
                      HandleDelete(s);
                    }}
                  >
                    <MdDelete />
                  </button>
                  <button className={styles.edit}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pageBtnContainer}>
          <button onClick={HandlePrevsPage}>Prev</button>
          <p>{currentPage}</p>
          <button onClick={HandleNextPage}>Next</button>
        </div>
      </div>
    </>
  );
}
