import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Modal from "./Modal";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.colorBlock}>
          <HashLink to="/#aboutUs" className={styles.textLink}>
            <p>About Us</p>
          </HashLink>
          <Link to="/contact" className={styles.textLink}>
            <p>Contact</p>
          </Link>
          <Modal>
            <p>Our Team</p>
          </Modal>
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
            href="https://www.instagram.com/"
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
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyrightRow}>
        <div className={styles.copyright}> © Wilders team 2022 </div>
      </div>
    </div>
  );
};
export default Footer;
