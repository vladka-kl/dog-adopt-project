import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
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
            <a
              className={styles.iconPersonal}
              href="https://github.com/vladka-kl/dog-adopt-project"
              target="_blank"
            >
              <i>
                <FaGithubSquare
                  color="#fffbf7"
                  size="24"
                  classname={styles.iconPersonal}
                />
              </i>
            </a>
            <a
              className={styles.iconPersonal}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <i>
                <AiFillLinkedin
                  color="#fffbf7"
                  size="24"
                  classname={styles.iconPersonal}
                />
              </i>
            </a>
            <a
              className={styles.iconPersonal}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <i>
                <AiOutlineInstagram
                  color="#fffbf7"
                  size="24"
                  classname={styles.iconPersonal}
                />
              </i>
            </a>
          </div>
        </div>
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyrightRow}>
        <div className={styles.copyright}> © Wilders team 2022 </div>
      </div>
    </div>
  );
};
export default Footer;
