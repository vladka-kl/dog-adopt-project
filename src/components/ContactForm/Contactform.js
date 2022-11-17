import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.main}>
      <h2 className={styles.headline}>Contact Us</h2>
      <div className={styles.inputFields}>
        <input type="text" placeholder="Your name" name="name" required />
      </div>

      <div className={styles.inputFields}>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className={styles.inputFields}>
        <input type="city" placeholder="City" name="city" required />
      </div>
      <div className={styles.inputFields}>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className={styles.submitButton}>
        <Link to="/congrats">
          <button type="submit">Submit</button>
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
