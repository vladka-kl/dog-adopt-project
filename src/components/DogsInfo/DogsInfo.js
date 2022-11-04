import React, { useEffect, useState } from "react";
// import { Dropdown } from "../Dropdown";
// import { Button } from "../Button";
// import {Picture } from ".Picture";
import styles from "./dogsInfo.module.css"
import { breedsData } from "./data";
import { BreedsInfoBox } from "./BreedsInfoBox";
import { Dropdown } from "./dropdown";
import Union1 from "./Union1.svg"
import { Link } from 'react-router-dom';

const DogsInfo = () => {
    const [index, setIndex] = useState(0);
    const [name, setName] = useState("");

    const handleClick = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const selectedDog = breedsData.find(singleBreed => singleBreed.name === name)
    console.log(selectedDog)
    return <section className={styles.main}>
        <h2 className={styles.title2}> Some info about breeds </h2>
        <Dropdown onSelect={handleClick} />
        <div id="DogCart" className={styles.card}>
            <div id="dataContainer">
                <h3 className={styles.title1}> The best breed ever  </h3>
                <div className={styles.colorSquare}> </div>
                {selectedDog && <BreedsInfoBox
                    key={index}
                    id={selectedDog.id}
                    name={selectedDog.name}
                    origin={selectedDog.origin}
                    life_span={selectedDog.life_span}
                    image={selectedDog.image.url}
                />}
            </div>
        </div>
        < div className={styles.buttonPlace}>
            <Link to='/breed-info'>
                <button className={styles.buttonMore}>
                    <p> More info </p>
                </button>
            </Link>
            <img src={Union1} className={styles.pawPic} alt="union1Paw"></img>
        </div>
    </section >
}

export { DogsInfo }; 
