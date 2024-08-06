import React from "react";
import styles from "./layout.module.css";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
  

  return (
    <header id={styles.header}>
      <div className={styles.logoTitle}>
      <FaSchool className={styles.logo} />
        <div>KPS</div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/Admin">
          <button>Admin Pannel</button>
        </Link>
          <Link to="/Teacher">
            <button>Teacher Pannel</button>
          </Link>
        <Link to="/Student">
          <button>Student Pannel</button>
        </Link>
      </div>
    </header>
  );
}
