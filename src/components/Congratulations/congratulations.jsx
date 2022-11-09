import styles from "./congrats.module.css";
import { Link } from 'react-router-dom';
import congratsPic from "./congratsPic.svg"

const Congratulations = () => {
    return (
        <div classname={styles.congratsForm}>
            <h1> Hello! </h1>
            <div className={styles.container}>
                <div classname={styles.pictureElement}>
                    <img src={congratsPic} alt="congratsPic"></img>
                </div>
                <div className={styles.textElement}></div>
                <div className={styles.textBlock}>
                    <p> Congratulation   text ff </p>
                </div>
            </div>
            <Link to='/'>
                <button className={styles.backToHomeBtn}> To home page </button>
            </Link>
        </div>
    )
}
export { Congratulations }; 