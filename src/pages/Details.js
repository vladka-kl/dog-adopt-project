import React from "react";
import BreedInfo from "../components/BreedInfo/BreedInfo";

const Details = ({ selectedDog }) => {
  if (!Object.keys(selectedDog).length) {
    return <div> no dog was selected </div>;
  }

  return (
    <div className="LandingPage">
      <BreedInfo
        name={selectedDog.name}
        bred_for={selectedDog.bred_for}
        temperament={selectedDog.temperament}
        breed_group={selectedDog.breed_group}
        life_span={selectedDog.life_span}
        image={selectedDog.image.url}
      />
    </div>
  );
};

export default Details;
