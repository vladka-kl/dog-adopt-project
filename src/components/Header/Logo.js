import { Link } from "react-router-dom";
import logo from "./logo.svg";
import styles from "./Header.module.css";

export const Logo = () => {
  return (
    <div className={styles.headerLogo}>
      <Link to="./pages/LandingPage">
        <img src={logo}></img>
      </Link>
      <div className={styles.logoText}>
        <h4>ADOPTS</h4>
        <p>ADOPT DON'T BUY</p>
      </div>
    </div>
  );
};
