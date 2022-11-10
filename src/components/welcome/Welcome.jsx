
import React from 'react';
import styles from './welcome.module.css';
import mainDog from './dog.png';

const Welcome = () => {
  return (
    <section className={styles.containerBG}>
      <div className={styles.welcomeBox}>
        <h1 className={styles.title}>
          <strong>
            <em>ADOPT DON'T BUY</em>
          </strong>
        </h1>
        <button className={styles.adoptButton}>ADOPT</button>
      </div>
      <div className={styles.mainDog}>
        <img className={styles.mainDogImg} src={mainDog} alt='' />
      </div>
    </section>
  );
};

export default Welcome;
