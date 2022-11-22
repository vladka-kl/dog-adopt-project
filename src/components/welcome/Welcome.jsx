import React from "react";
import styles from "./welcome.module.css";
import mainDog from "../../assets/images/dog.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className={styles.containerBG}>
      <div className={styles.welcomeBox}>
        <h1 className={styles.title}>ADOPT DON'T BUY</h1>
        <Link to="/contact">
          <button className={styles.adoptButton}>ADOPT</button>
        </Link>
      </div>
      <div className={styles.mainDog}>
        <img className={styles.mainDogImg} src={mainDog} alt="" />
      </div>
    </section>
  );
};

export default Welcome;
