import AliceCarousel from "react-alice-carousel";
import React, { useState, useEffect } from "react";
import styles from "./RandomDogSlider.module.css";
import axios from "axios";

function dataFetch() {
  const url = "https://api.thedogapi.com/v1/breeds";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetching = (url, setResp) => {
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

  useEffect(() => {
    handleFetching(url, setImages);
  }, []);
  console.log(images);

  // const items = images.map((e) => (
  //   <div className={styles.e.image.id}>
  //     <img src={e.image.url} />
  //   </div>
  // ));
  return (
    <div>
      loading ? (<h2>loading...</h2>) : (images.map((image) => (
      <div className={styles.image.id}>
        <img src={image.url} />
      </div>
      )))
    </div>
  );
}

function RandomDogSlider() {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };

  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      items={dataFetch}
      controlsStrategy="alternate"
    />
  );
}

export { RandomDogSlider };
