import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";

const LandingPage = () => (
  <div className="LandingPage">
    <h2>LandingPage</h2>
    <AboutUsInfo />
    <RandomDogSlider />
    <DogsInfo />
  </div>
);

export default LandingPage;
