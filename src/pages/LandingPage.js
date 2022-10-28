import React from 'react';
import { RandomDogSlider } from '../components/RandomDogSlider/RandomDogSlider'
import 'react-alice-carousel/lib/alice-carousel.css';
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText"
import { DogsInfo } from '../components/DogsInfo/DogsInfo'


function LandingPage() {
<<<<<<< HEAD
    return(
    <div className="LandingPage">
      <AboutUsInfo
      title={RandomText.title}
      text={RandomText.text}/>
       <RandomDogSlider />
    </div>)
=======
    return (
        <div className="LandingPage">
            <AboutUsInfo
                title={RandomText.title}
                text={RandomText.text} />
            <RandomDogSlider />
            <DogsInfo />

        </div>)
>>>>>>> 9454a7054e755adf7d08c6fb2a2d3d4c0c07d51c
}
export { LandingPage };