import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import Module from "./Modal";

const linkNames = ["About", "Contact", "Our Team"];
const socialMedia = ["Github", "LinkedIn", "Instagram"];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.colorBlock}>
          <div className={styles.footerLinksGen}>
            <h3 classname={styles.titleLinks}>General</h3>
            <a href="#aboutUs" className={styles.textLink}>
              <p>About</p>
            </a>
            <Link to="/contact" className={styles.textLink}>
              <p>Contact</p>
            </Link>
            <Module>
              <p>Our Team</p>
            </Module>
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
          <a
            href="https://github.com/vladka-kl/dog-adopt-project"
            target="_blank"
          >
            <i classname={styles.iconGit}>
              <FaGithubSquare />
            </i>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Footer;
