import styles from "./AboutUsInfo.module.css";
import React from "react";

function AboutUsInfo({ text, title }) {
  return (
    <section className={styles.aboutUs}>
      <h2 classname={styles.titleAU}>{title}</h2>
      {/* <br /> */}
      <p className={styles.text}>{text}</p>
    </section>
  );
}

export { AboutUsInfo };
