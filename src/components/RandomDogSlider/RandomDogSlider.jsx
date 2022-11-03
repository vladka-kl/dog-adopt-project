import AliceCarousel from "react-alice-carousel";
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

export { RandomDogSlider };
