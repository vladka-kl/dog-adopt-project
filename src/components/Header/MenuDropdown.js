import React from "react";
import styles from "./MenuDropdown.module.css";

export const MenuDropdown = ({ isOpen }) => {
  return (
    <div className={styles.dropdown}>
      <div className={`${styles.burger} ${styles.burger1}`} />
      <div className={`${styles.burger} ${styles.burger2}`} />
      <div className={`${styles.burger} ${styles.burger3}`} />
    </div>
  );
};
