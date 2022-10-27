import { RandomDogSlider } from '../components/RandomDogSlider/RandomDogSlider'
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';


function LandingPage() {
    return(
    <div className="LandingPage">
        <RandomDogSlider />
    </div>)
}
export {LandingPage};