import React from "react";

import { useNavigate } from "react-router-dom";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/congrats");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.main}>
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
