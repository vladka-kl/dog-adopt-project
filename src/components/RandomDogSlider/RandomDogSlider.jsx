import AliceCarousel from "react-alice-carousel";
import React, { useState, useEffect } from "react";
import styles from "./RandomDogSlider.module.css";
import axios from "axios";

function RandomDogSlider() {
  const url = "https://api.thedogapi.com/v1/breeds";
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

  const handleFetching = (url, setResp) => {
    axios.get(url).then((resp) => {
      setResp(resp.data);
      // setLoading(false);
    });
    // .catch((e) => {
    //   console.log(e);
    //   setLoading(false);
    // });
  };

  useEffect(() => {
    handleFetching(url, setImages);
  }, []);
  console.log(images);

  const items = images.map((e) => (
    <div className={styles.e.image.id}>
      <img src={e.image.url} />
    </div>
  ));

  // <div>
  //   {loading ? (
  //     <h2>loading...</h2>
  //   ) : (

  //     ))
  //   )}
  // </div>;

  return (
    <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" />
  );
}

export { RandomDogSlider };
