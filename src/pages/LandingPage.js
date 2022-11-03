import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";

const LandingPage = () => (
  <div className="LandingPage">
    <h2>LandingPage</h2>
  </div>
);

function LandingPage() {
  return (
    <div className="LandingPage">
      <RandomDogSlider />
      <AboutUsInfo title={RandomText.title} text={RandomText.text} />
    </div>
  );
}
export { LandingPage };
