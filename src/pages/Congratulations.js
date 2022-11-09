import React from "react";
import styles from "./Congratulations.module.css";
import Header from "../components/Header";
import Confetti from "react-confetti";

const Congratulations = () => (
  <div>
    <Header />
    <Confetti />
    <h2 className={styles.congratulations}>Congratulations</h2>
  </div>
);

export default Congratulations;
