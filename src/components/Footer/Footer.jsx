import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.colorBlock}>
          <div className={styles.footerLinksGen}>
            <h3 classname={styles.titleLinks}>General</h3>
            <Link to="/" className={styles.textLink}>
              <p>About</p>
            </Link>
            <p>Shelters</p>
            <Link to="/contact" className={styles.textLink}>
              <p>Contact</p>
            </Link>
            <p>Our Team</p>
          </div>
          <div className={styles.footerLinksSocial}>
            <h3>Social Media</h3>
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyrightRow}>
        <div className={styles.copyright}> © Wilders team 2022 </div>
        <IconContext.Provider
          value={{
            color: "rgba(255, 255, 255, 1)",
            className: "iconGit",
            size: "30",
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
export default Footer;
