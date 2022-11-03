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

export { RandomDogSlider };
