import React, { useEffect, useState } from "react";
// import { Dropdown } from "../Dropdown";
// import { Button } from "../Button";
// import {Picture } from ".Picture";
import styles from "./dogsInfo.module.css"
import { breedsData } from "./data";
import { BreedsInfoBox } from "./BreedsInfoBox";
import { Dropdown } from "./dropdown";

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
        <h2> Some info about breed </h2>
        <Dropdown onSelect={handleClick} />
        <div id="DogCart" className={styles.card}>
            <div id="dataContainer">
                <h3> The best breed ever  </h3>
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
            <a href="https://www.pdsa.org.uk/what-we-do/blog/10-amazing-facts-about-dogs">
                <button className={styles.button}>
                    <p> More info</p>
                </button>
            </a>

        </div>
    </section >
}

export { DogsInfo }; 