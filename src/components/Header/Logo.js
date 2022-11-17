import { Link } from "react-router-dom";
import logo from "./logo.svg";
import styles from "./Header.module.css";
import React from "react";

export const Logo = () => {
  return (
    <div className={styles.headerLogo}>
      <Link to='/'>
        <img className={styles.imageLogo} src={logo} alt='breeds' />
      </Link>
      <div className={styles.logoText}>
        <p>ADOPTS</p>
        <p>ADOPT DOG</p>
      </div>
    </div>
  );
};
