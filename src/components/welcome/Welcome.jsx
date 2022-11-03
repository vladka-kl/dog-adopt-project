import react from "react";
import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <section className={styles.welcomeBox}>
      <h1 className={styles.title}>
        ADOPT
        <br />
        DON'T BUY
      </h1>
      <button className={styles.adoptButton}>ADOPT</button>
    </section>
  );
};

export default Welcome;
