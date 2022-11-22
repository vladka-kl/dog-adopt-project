import React from "react";
import styles from "./BreedInfo.module.css";

function BreedInfo(props) {
  return (
    <div className={styles.infobox}>
      <ul className={styles.infolist}>
        <li className={styles.item}>
          <p className={styles.title}>Name:</p>
          <p>{props.name}</p>
        </li>
        {props.bred_for && (
          <li className={styles.item}>
            <p className={styles.title}>Bred for:</p>
            <p>{props.bred_for}</p>
          </li>
        )}
        {props.breed_group && (
          <li className={styles.item}>
            <p className={styles.title}>Breed Group:</p>
            <p>{props.breed_group}</p>
          </li>
        )}
        {props.temperament && (
          <li className={styles.item}>
            <p className={styles.title}>Temperament:</p>
            <p>{props.temperament}</p>
          </li>
        )}
        {props.origin && (
          <li className={styles.item}>
            <p className={styles.title}>Breed origin:</p>
            <p>{props.origin} </p>
          </li>
        )}
        {props.life_span && (
          <li className={styles.item}>
            <p className={styles.title}>Breed life-span:</p>
            <p>{props.life_span} </p>
          </li>
        )}
      </ul>
      <img className={styles.photobox} src={props.image} alt="alt" />
    </div>
  );
}

export default BreedInfo;
