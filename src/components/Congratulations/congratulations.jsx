import styles from "./congrats.module.css";
import { Link } from 'react-router-dom';
import congratsPic from "./congratsPic.svg"

const Congratulations = () => {
    return (
        <div classname={styles.congratsForm}>
            <h1> Congratulations! </h1>
            <div className={styles.container}>
                <div classname={styles.pictureElement}>
                    <img className={styles.pic} src={congratsPic} alt="congratsPic"></img>
                </div>
                <div className={styles.textElement}></div>
                <div className={styles.textBlock}>
                    <h3> Your new friend is on the way home</h3>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
            <Link to='/' className={styles.buttonPlace}>
                <button className={styles.backToHomeBtn}> To home page </button>
            </Link>
        </div>
    )
}
export { Congratulations }; 