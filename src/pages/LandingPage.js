import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";
import Header from "../components/Header/index";
import Welcome from "../components/welcome/Welcome";
import { Footer } from "../components/Footer/Footer";

const LandingPage = () => (
  <div className="LandingPage">
    <Header />
    <Welcome />
    <AboutUsInfo title={RandomText.title} text={RandomText.text} />
    <RandomDogSlider />
    <DogsInfo />
    <Footer />
  </div>
);

export default LandingPage;
