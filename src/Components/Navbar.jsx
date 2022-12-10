import React from 'react'
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.topic}>
            Data Science or Product Management: Which career is right for you?
        </div>
        <button className={styles.button}>Talk to an Expert</button>      
    </div>
  );
}

export default Navbar
