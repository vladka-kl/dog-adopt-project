import styles from "./footer.module.css";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.picBlock}>
        <div className={styles.colorBlock}>
          <p className={styles.text}> Adopt a Dog today </p>
        </div>
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyright}> © Wilders team 2022 </div>
    </div>
  );
};
export { Footer };
