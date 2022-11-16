<<<<<<< HEAD
import styles from './footer.module.css'
import React from 'react'
import FooterDog from '../../assets/images/FooterDog.png'
import FooterDog1 from '../../assets/images/FooterDog1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.colorBlock}>
                    <p className={styles.text}> Adopt a Dog today </p>
                    <Link to='/contact'>
                        <button className={styles.checkBtn}> Contact us </button>
                    </Link>
                </div>
                <div className={styles.picBlock}>
                    <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
                </div>
            </div>
            <div className={styles.copyright}> © Wilders team 2022 </div>
=======
import styles from "./footer.module.css";
import React from "react";
import FooterDog from "../../assets/images/FooterDog.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.picBlock}>
        <div className={styles.colorBlock}>
          <p className={styles.text}> Adopt a Dog today </p>
>>>>>>> 96a01c6 (folders orginised)
        </div>
        <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
      </div>
      <div className={styles.copyright}> © Wilders team 2022 </div>
    </div>
  );
};
export { Footer };
