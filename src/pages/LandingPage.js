import React from "react";
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import "react-alice-carousel/lib/alice-carousel.css";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";
import Welcome from "../components/welcome/Welcome";
import Steps from "../components/Steps/Steps";
import { Footer } from "../components/Footer/Footer";

const LandingPage = ({ selectedDog, setSelectedDog, dogsInfoResp }) => (
  <div className="LandingPage">
    <Header />
    <Welcome />
    <AboutUsInfo title={RandomText.title} text={RandomText.text} />
    <Steps />
    <RandomDogSlider
      selectedDog={selectedDog}
      setSelectedDog={setSelectedDog}
    />
    <DogsInfo
      selectedDog={selectedDog}
      setSelectedDog={setSelectedDog}
      dogsInfoResp={dogsInfoResp}
    />
    <Footer />
  </div>
);

export default LandingPage;
