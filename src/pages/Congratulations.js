import React from "react";
import styles from "./Congratulations.module.css";
import Confetti from "react-confetti";

const Congratulations = () => (
  <div>
    <Confetti />
    <div className={styles.congratulations}>
      <h2 class={styles.headline}>Congratulations!</h2>
      <p class={styles.subText}>
        You will soon be the Owner of a cute Dog ▼・ᴥ・▼
      </p>
    </div>
  </div>
);

export default Congratulations;
