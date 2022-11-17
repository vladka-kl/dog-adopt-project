import React from "react";
import styles from "./BurgerIcon.module.css";

export const BurgerIcon = ({ isOpen }) => {
  return (
    <div className={styles.dropdown}>
      <div className={`${styles.burger} ${styles.burger1}`} />
      <div className={`${styles.burger} ${styles.burger2}`} />
      <div className={`${styles.burger} ${styles.burger3}`} />
    </div>
  );
};
