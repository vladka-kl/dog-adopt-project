import { Link } from "react-router-dom";
import logo from "./logo.svg";
import styles from "./Header.module.css";
import React from 'react';

export const Logo = () => {
  return (
    <div className={styles.headerLogo}>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <div className={styles.logoText}>
        <h4>ADOPTS</h4>
        <p>ADOPT DON'T BUY</p>
      </div>
    </div>
  );
};
