import React from "react";
import styles from "./BreedInfo.module.css";

function BreedInfo(props) {
  return (
    <div>
      <ul className={styles.infobox}>
        <li className={styles.item}>
          <p className={styles.title}>Name:</p>
          <p>{props.name}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>Bred for:</p>
          <p>{props.bred_for}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>Breed Group:</p>
          <p>{props.breed_group}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>Temperament:</p>
          <p>{props.temperament}</p>
        </li>
        {props.origin && (
          <li className={styles.item}>
            <p className={styles.title}>Breed origin:</p>
            <p>{props.origin} </p>
          </li>
        )}
        <li className={styles.item}>
          <p className={styles.title}>Breed life-span:</p>
          <p>{props.life_span} </p>
        </li>
      </ul>
      <img className={styles.photobox} src={props.image} alt="alt" />
    </div>
  );
}

export default BreedInfo;
