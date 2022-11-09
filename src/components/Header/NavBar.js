import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
          <Link to="./pages/LandingPage" className={styles.textLink}>
            About us
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link to="./pages/BreedsInfo" className={styles.textLink}>
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
          <Link to="./pages/ContactUs" className={styles.textLink}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
