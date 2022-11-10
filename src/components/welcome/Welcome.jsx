
import React from 'react';
import styles from './welcome.module.css';
import mainDog from './dog.png';

const Welcome = () => {
  return (
    <section className={styles.containerBG}>
      <div className={styles.welcomeBox}>
        <h1 className={styles.title}>
          ADOPT
          <br />
          DON'T BUY
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
