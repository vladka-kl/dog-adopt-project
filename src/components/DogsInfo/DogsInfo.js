import React, { useState } from "react";
import styles from "./dogsInfo.module.css";
import { BreedsInfoBox } from "./BreedsInfoBox";
import { Dropdown } from "./dropdown";
import Union1 from "./Union1.svg";
import { Link } from "react-router-dom";

const DogsInfo = ({ setSelectedDog, dogsInfoResp }) => {
  const [selectedDogName, setSelectedDogName] = useState(dogsInfoResp[51].name);

  const handleSelect = (event) => {
    setSelectedDogName(event.target.value);
    setSelectedDog(dogsInfoResp.find((dog) => dog.name === event.target.value));
  };

  const selectedDogData = dogsInfoResp.find(
    (dog) => dog.name === selectedDogName
  );

  return (
    <section className={styles.main}>
      <h2 className={styles.title2}> Some info about breeds </h2>

      <Dropdown onSelect={handleSelect} dogsInfoResp={dogsInfoResp} isHeader />

      <div id="DogCart" className={styles.card}>
        <div id="dataContainer">
          <h3 className={styles.title1}> The best breed ever </h3>
          <div className={styles.colorSquare}> </div>
          {selectedDogData && (
            <BreedsInfoBox
              id={selectedDogData.id}
              name={selectedDogData.name}
              origin={selectedDogData.origin}
              life_span={selectedDogData.life_span}
              image={selectedDogData.image.url}
            />
          )}
        </div>
      </div>
      <div className={styles.buttonPlace}>
        <Link to="/breed-info">
          <button className={styles.buttonMore}>
            <p> More info </p>
          </button>
        </Link>
        <img src={Union1} className={styles.pawPic} alt="union1Paw"></img>
      </div>
    </section>
  );
};

export { DogsInfo };
