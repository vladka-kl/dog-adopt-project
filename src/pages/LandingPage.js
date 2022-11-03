import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";
import NavBar from '../components/naveBar/NavBar';
import { Footer } from "../components/Footer/Footer";

const LandingPage = () => (
  <div className="LandingPage">
    <NavBar />
    <h2>LandingPage</h2>
    <AboutUsInfo />
    <RandomDogSlider />
    <DogsInfo />
    <Footer />
  </div>
);

export default LandingPage;
