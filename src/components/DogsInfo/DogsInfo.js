import React, { useEffect, useState } from "react";
// import { Dropdown } from "../Dropdown";
// import { Button } from "../Button";
// import {Picture } from ".Picture";
import styles from "./dogsInfo.module.css"
import { pictures } from "./pictures";
import { breedsData } from "./data";
import { BreedsPicture } from "./BreedsPicture";
import { BreedsInfoBox } from "./BreedsInfoBox";


const DogsInfo = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log("I change state now");
    }, [index]);

    const handleOnClick = () => {
        setIndex(index + 1);
    }

    return <section className={styles.main}>
        <h2> Some info about breed </h2>
        <select className={styles.dropdown}>
            <option>Choose your breed</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
        </select>
        <div id="DogCart" className={styles.card}>
            <div id="dataContainer">
                <h3> The best breed ever  </h3>
                {breedsData.map((breed, index) => (
                    <BreedsInfoBox
                        key={index}
                        id={breed.id}
                        name={breed.name}
                        origin={breed.origin}
                        life_span={breed.life_span}
                    />
                ))[0]}
            </div>
            <div id="picContainer">
                {pictures.map((dog, index) => (
                    <BreedsPicture
                        key={index}
                        id={dog.id}
                        url={dog.url}
                    />
                ))[0]}
            </div>
        </div>
        < div className={styles.buttonPlace}>
            <a href="https://www.pdsa.org.uk/what-we-do/blog/10-amazing-facts-about-dogs">
                <button className={styles.button}>
                    <p> More info</p>
                </button>
            </a>
            <button className={styles.button} onClick={handleOnClick}> Go to another breed </button>
        </div>
    </section >
}

export { DogsInfo }; 