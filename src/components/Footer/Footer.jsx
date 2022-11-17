import styles from "./footer.module.css";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.picBlock}>
        <div className={styles.colorBlock}>
          <p className={styles.text}> Adopt a Dog today </p>
        </div>
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyrightRow}>
        <div className={styles.copyright}> © Wilders team 2022 </div>
        <IconContext.Provider
          value={{
            color: "rgba(255, 255, 255, 1)",
            className: "iconGit",
            size: "20",
          }}
        >
          <a href="https://github.com/vladka-kl/dog-adopt-project">
            <span classname={styles.iconGit}>
              <FaGithubSquare />
            </span>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export { Footer };
