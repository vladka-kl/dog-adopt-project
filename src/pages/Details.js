import React from "react";
import BreedInfo from "../components/BreedInfo/BreedInfo";

const Details = ({ selectedDog }) => {
  function isEmpty(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
  }
  if (isEmpty(selectedDog)) {
    return <div> no dog was selected </div>;
  }

  console.log(selectedDog);
  return (
    <BreedInfo
      name={selectedDog.name}
      bred_for={selectedDog.bred_for}
      temperament={selectedDog.temperament}
      breed_group={selectedDog.breed_group}
      life_span={selectedDog.life_span}
      image={selectedDog.image.url}
    />
  );
};

export default Details;
