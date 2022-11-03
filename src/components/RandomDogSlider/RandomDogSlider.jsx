import AliceCarousel from "react-alice-carousel";
import React, { useState, useEffect } from "react";
import styles from "./RandomDogSlider.module.css";
import axios from "axios";

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

function RandomDogSlider() {
  const url = "https://api.thedogapi.com/v1/breeds";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetching(url, setImages, setLoading);
  }, []);

  if (loading) {
    return <h2> loading..</h2>;
  }

  const image = images.map((e) => <img src={e.image.url} alt={e.name} />);

  const randomNumber = Math.floor(Math.random() * images.length) - 3;
  console.log(image);

  const randomArray = image.slice(randomNumber, randomNumber + 3);
  console.log(randomArray);

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
