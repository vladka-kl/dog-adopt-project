<<<<<<< HEAD
import { RandomDogSlider } from "../components/RandomDogSlider/RandomDogSlider";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
=======
import React from 'react';
import { RandomDogSlider } from '../components/RandomDogSlider/RandomDogSlider'
import 'react-alice-carousel/lib/alice-carousel.css';
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import {RandomText} from "../components/AboutUsInfo/RandomText"

>>>>>>> db7042db42b9d763cfb33577f947185210923c84

const LandingPage = () => (
  <div className="LandingPage">
    <h2>LandingPage</h2>
  </div>
);

<<<<<<< HEAD
export default LandingPage;
=======
function LandingPage() {
    return(
    <div className="LandingPage">
      <RandomDogSlider />
      <AboutUsInfo
      title={RandomText.title}
      text={RandomText.text}/>
    </div>)
}
export {LandingPage};
>>>>>>> db7042db42b9d763cfb33577f947185210923c84
