import React from "react";
import styles from "./Congratulations.module.css";
import Confetti from "react-confetti";
import Maps from "../components/Maps/Maps";

const Congratulations = () => (
  <div>
    <Confetti />
    <div className={styles.congratulations}>
      <h2 className={styles.headline}>Congratulations!</h2>
      <div className={styles.subText}>
        <p>You will soon be the Owner of a cute Dog ▼・ᴥ・▼</p>
        <br />
        <p>Here are some Dog Shelters in Berlin:</p>
      </div>
      <Maps className={styles.maps} />
    </div>
  </div>
);

export default Congratulations;
