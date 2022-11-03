import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";
import NavBar from "../components/naveBar/NavBar";
import Welcome from "../components/welcome/Welcome";

const LandingPage = () => (
  <div className="LandingPage">
    <NavBar />
    <Welcome />
    <AboutUsInfo title={RandomText.title} text={RandomText.text} />
    <RandomDogSlider />
    <DogsInfo />
  </div>
);

export default LandingPage;
