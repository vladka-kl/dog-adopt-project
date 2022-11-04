import React from 'react';
import styles from "./dogsInfo.module.css"

const BreedsInfoBox = props => {
    return (
        <div className={styles.infoBox}>
            <div>
                <ul className={styles.container}>
                    <li className={styles.item}>
                        <p className={styles.title}>Breed name:</p>
                        <p className={styles.responce}>{props.name}</p> </li>
                    <li className={styles.item}>
                        <p className={styles.title}>Breed origin:</p>
                        <p className={styles.responce}>{props.origin} </p></li>
                    <li className={styles.item}>
                        <p className={styles.title}>Breed life-span:</p>
                        <p className={styles.responce}>{props.life_span} </p></li>
                </ul>
                <img className={styles.pictureBox} src={props.image} alt="alt" />
            </div>
        </div>
    )
}

export { BreedsInfoBox };