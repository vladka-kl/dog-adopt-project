import React from "react";
import { DogsInfo } from "../components/DogsInfo/DogsInfo";
import { Footer } from "../components/Footer/Footer";

const LandingPage = () => {
    return (<div className="LandingPage">
        <DogsInfo />
        <Footer />
    </div>)
}
export { LandingPage };