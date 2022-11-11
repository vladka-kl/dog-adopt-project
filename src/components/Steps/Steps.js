/* eslint-disable array-callback-return */
import React from "react";
import styles from "./steps.module.css";
import find from "../../assets/icons/find-dog.svg";
import love from "../../assets/icons/love.svg";
import profile from "../../assets/icons/profile.svg";
import advisor from "../../assets/icons/advisor.svg";
import meet from "../../assets/icons/meet.svg";
import prepare from "../../assets/icons/prepare.svg";
import contract from "../../assets/icons/contract.svg";
import dogAtHome from "../../assets/icons/dog-at-home.svg";

const textContents = [
  "Find your pet",
  "Trust our suggestions",
  "Specify yours caregiver profile",
  "let's talk with an advisor",
  "Meet pet",
  "Prepare up!",
  "We will sign contract",
  "Say hello to the pet in my house",
];

const imgSrcS = [
  find,
  love,
  profile,
  advisor,
  meet,
  prepare,
  contract,
  dogAtHome,
];

const Steps = () => {
  return (
    <div className={styles.steps__container}>
      <h2 className={styles.steps__title}>
        {"8 Steps for Adoption".toUpperCase()}
      </h2>
      <div className={styles.steps__elements__wrapper}>
        {imgSrcS.map((imgSrc, i) => {
          return (
            <div className={styles.steps__imgText} key={i}>
              <div className={styles.steps__imgs__wrapper}>
                <img
                  className={styles.steps__elements__imgs}
                  src={imgSrc}
                  alt="find-dog"
                />
              </div>
              <p className={styles.steps__elements__text}>
                {textContents.find((text, x) => i === x)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
