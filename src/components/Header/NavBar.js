import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
          <Link to="/" className={styles.textLink}>
            About us
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link to="/breed-info" className={styles.textLink}>
            Breeds
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link to="./RandomDog" className={styles.textLink}>
            Random Dog Pic
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link to="./FullDogsInfo" className={styles.textLink}>
            Breeds Info
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.textLink}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
