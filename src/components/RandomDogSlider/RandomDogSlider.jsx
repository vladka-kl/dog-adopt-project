import AliceCarousel from "react-alice-carousel";
import React, { useState, useEffect, useNavigate } from "react";
import styles from "./RandomDogSlider.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Details from "../../pages/Details";

// Handle API fetching: change to custom hook!
const handleFetching = (url, setResp, setLoading) => {
  axios
    .get(url)
    .then((resp) => {
      setResp(resp.data);
      setLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
    });
};

function RandomDogSlider({ selectedDog, setSelectedDog }) {
  const url = "https://api.thedogapi.com/v1/breeds";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate;

  useEffect(() => {
    handleFetching(url, setImages, setLoading);
  }, []);

  //Track loading state
  if (loading) {
    return <h2> loading..</h2>;
  }

  //Mapping through images
  const image = images.map((e, i) => (
    <NavLink key={i} to="/breed-info">
      <img
        src={e.image.url}
        alt={e.name}
        onClick={() => setSelectedDog(e)}
        // onClick={navigate(`/breed-info/${id}`)}
      />
    </NavLink>
  ));

  //Import random picture into slider
  const randomNumber = Math.floor(Math.random() * images.length) - 5;
  const randomArray = image.slice(randomNumber, randomNumber + 5);

  //Responsive number of pictures
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className={styles.wrapper}>
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        items={randomArray}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export { RandomDogSlider };
