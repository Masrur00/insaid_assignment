import React from 'react'
import styles from './Landing.module.css';
const Landingpage = () => {
    return (
      <>
        <div className={styles.container}>
          <h4>Get your Dream Job with</h4>
          <sec>Top Programs</sec>
          <p>
            Learn with India's leading online school for working professionals
          </p>
          <button>
            Talk to an Expert
          </button>
        </div>
        <div className={styles.slider}></div>
      </>
    );
}

export default Landingpage
