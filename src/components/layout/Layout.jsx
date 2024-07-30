import React, { Children } from 'react'
import styles from './layout.module.css';
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      <div className={styles.mainContainer}>
      {
        children
      }
      </div>
     
      <Footer/>
    </div>
  )
}
