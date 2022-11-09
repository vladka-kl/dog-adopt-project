import styles from './footer.module.css'
import React from 'react'
import FooterDog from '../../images/FooterDog.png'
import { Link } from 'react-md';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.picBlock}>
                <div className={styles.colorBlock}>
                    <p className={styles.text}> Adopt a Dog today </p>
                    <a href="https://tierschutz-berlin.de/">
                        <button className={styles.checkBtn}> Check shelters </button>
                    </a>
                </div>
                <img src={FooterDog} alt="footer-dog" className={styles.picture}></img>
            </div>
            <div className={styles.copyright}> © Wilders team 2022 </div>
        </div>
    )
};
export { Footer };