import styles from "./AboutUsInfo.module.css";
import React from "react";
import dogIcon from "../../assets/icons/dogIcon.svg";
import find from "../../assets/icons/find.svg";
import prepare from "../../assets/icons/prepareAboutUs.svg";

const icons = [dogIcon, find, prepare];
const texts = [
  "Say hello to the Adopted animal in my house",
  "Who you are and who are you looking for?",
  "Prepare up!",
];
function AboutUsInfo({ text, title }) {
  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.iconsContainer}>
        {icons.map((icon, i) => {
          return (
            <div className={styles.iconText} key={i}>
              <div className={styles.iconWrapper}>
                <img className={styles.iconClass} src={icon} alt="icons" />
              </div>
              <p className={styles.textsIcon}>
                {texts.find((text, x) => i === x)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { AboutUsInfo };
