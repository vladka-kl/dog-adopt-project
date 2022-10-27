import React from 'react';
import styles from "./dogsInfo.module.css"

const BreedsInfoBox = props => {
    return (
        <div className={styles.infoBox}>
            <div>
                <ul>
                    <li>
                        <p className={styles.title}>Breed name:</p>
                        <p className={styles.responce}>{props.name}</p> </li>
                    <li><p className={styles.title}>Breed origin:</p>
                        <p className={styles.responce}>{props.origin} </p></li>
                    <li>
                        <p className={styles.title}>Breed life-span:</p>
                        <p className={styles.responce}>{props.life_span} </p></li>
                </ul>
            </div>
        </div>
    )
}

export { BreedsInfoBox };