import React, { useEffect, useState } from "react";
// import { Button } from "../Button";
// import {Picture } from ".Picture";
import styles from "./dogsInfo.module.css"
//import { breedsData } from "./data";
import { BreedsInfoBox } from "./BreedsInfoBox";
import { Dropdown } from "./dropdown";
import Union1 from "./Union1.svg"
import { Link } from 'react-router-dom';
import { useFetch } from "./dogsFetch";



const DogsInfo = () => {
    const [dogsInfoResp, errorResp, isLoading] = useFetch(
        `https://api.thedogapi.com/v1/breeds`
    );
    const [selectedDogName, setSelectedDogName] = useState(null);
    const dogsArray = dogsInfoResp.data;

    useEffect(() => {
        if (dogsArray?.length) {
            setSelectedDogName(dogsArray[51].name)
        }
    }, [dogsInfoResp])

    if (isLoading) {
        return <h2>still in process, loading...</h2>;
    }

    if (errorResp) {
        console.log("Error: ", errorResp);
        return <h2>an error has occurred, please contact the support</h2>;
    }

    //const [index, setIndex] = useState(0);
    //const [name, setName] = useState("");
    //const [loading, setLoading] = useState(true);

    const handleSelect = (event) => {
        setSelectedDogName(event.target.value)
    };



    const selectedDogData = dogsArray.find(dog => dog.name === selectedDogName)

    console.log('selectedDogData', selectedDogData)

    return <section className={styles.main}>
        <h2 className={styles.title2}> Some info about breeds </h2>

        <Dropdown onSelect={handleSelect} />

        <div id="DogCart" className={styles.card}>
            <div id="dataContainer">
                <h3 className={styles.title1}> The best breed ever  </h3>
                <div className={styles.colorSquare}> </div>
                {selectedDogData && <BreedsInfoBox
                    id={selectedDogData.id}
                    name={selectedDogData.name}
                    origin={selectedDogData.origin}
                    life_span={selectedDogData.life_span}
                    image={selectedDogData.image.url}
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
