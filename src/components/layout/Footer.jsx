import React from 'react'
import styles from './layout.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id={styles.footer}>
  <div className={styles.footerSectionAbout}>
    <h2>About</h2>
    <p>
    The KPS School Management System is designed to streamline the management of educational institutions with features like student tracking, teacher management, and more.
    </p>
  </div>
  <div className={styles.footerSectionLinks}>
    <h2>Quick Links</h2>
    <ul>
      <li>
     
          Home
        
      </li>
      <li>
     
          Admin Pannel
       
      </li>
      <li>
     
            Teacher Pannel
        
      </li>
      <li>
    
        Student Pannel
       
      </li>
    </ul>
  </div>
  <div className={styles.footerSectionContact}>
    <h2>Contact</h2>
    <p>Address: 123 Library St, Booktown, BK 12345</p>
    <p>Email: info@librarymanagement.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>
</footer>

  )
}
