import styles from "./welcome.module.css";

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
      <div className={styles.emptyBox}></div>
    </section>
  );
};

export default Welcome;
