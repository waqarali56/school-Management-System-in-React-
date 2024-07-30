import React from 'react'
import styles from "./main.module.css";
import data from "./data.js"

export default function Teacher() {
  return (
    <div>
       <div class={styles.userLogin}>
            <form id={styles.userForm} >
                <div class={styles.title}>Teacher Login</div>
                <div class={styles.inputContainer}>
                    <div class={styles.inputDiv}>
                        <div>Enter email</div>
                        <input type="email" name="email" class={styles.emailId} required/>
                    </div>
                    <div  class={styles.inputDiv}>
                        <div>Password</div>
                        <input type="password" name="password" class={styles.password}  required/>
                    </div>
                    <div class={styles.submit}>
                        <input type="submit" name="submit"/>
                    </div>
                    
                </div>
    
            </form> 
        </div>
    </div>
  )
}
