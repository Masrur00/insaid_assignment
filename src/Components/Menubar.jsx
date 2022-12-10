import React from "react";
import styles from "./Menubar.module.css";

const Menubar = () => {
  return (
    <div className={styles.menu}>
      <img
        alt="company logo"
        className={styles.image_logo}
        src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x.png"
      />
      <div className={styles.menuitem}>
        <a>Data Science</a>
        <a>Product Management</a>
        <a>For Corporate</a>
        <a>About INSAID</a>
              <button className={styles.button}>Login</button>
      </div>
    </div>
  );
};

export default Menubar;
