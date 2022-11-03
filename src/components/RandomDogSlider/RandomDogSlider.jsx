import AliceCarousel from "react-alice-carousel";
<<<<<<< HEAD
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
    console.log(images);

    return (
      <div>
        {loading ? (
          <h2>loading...</h2>
        ) : (
          images.map((e) => <img src={e.image.url} />)
        )}
      </div>
    );
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };

  return (
    <div>
      <AliceCarousel
      responsive={responsive}
      mouseTracking 
      items={images}
      controlsStrategy="alternate"
      /> 
    </div>
  );
}
=======
import React from "react";
import styles from "./RandomDogSlider.module.css";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 6 },
};

const items = [
  <div className={styles.item} data-value="1">
    <img
      src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
      alt="image1"
    />
  </div>,
  <div className={styles.item} data-value="2">
    <img
      src="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg"
      alt="image1"
    />
  </div>,
  <div className={styles.item} data-value="3">
    <img
      src="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg"
      alt="image1"
    />
  </div>,
];

const RandomDogSlider = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
  />
);
>>>>>>> 8a34030e98f19939ac87c1edd266d4e6df70f6d8

export { RandomDogSlider };
