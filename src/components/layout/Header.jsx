import React from 'react'
import styles from './layout.module.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id={styles.header}>
    <div className={styles.logoTitle}>
      <img className={styles.logo} src="./images/logo.png" alt="logo" />
      <div>KPS</div>
    </div>
    <div className={styles.buttonContainer}>
    <Link to="/Home" >
    <button>Home</button>
      </Link>
    <Link to="/Admin" >
    <button>Admin Login</button>
      </Link>
      <Link to="/Teacher" >
      <button>Teacher Login</button>
      </Link>
    </div>
  </header>
  
  )
}
