import React from 'react';
import styles from "./dogsInfo.module.css"

const BreedsPicture = props => {
    return (
        <div className={styles.pictureBox}>
            <div>
                <img src={props.url} alt="alt" />
            </div>
        </div>
    );
}

export { BreedsPicture }; 