import React from "react";
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import {RandomText} from "../components/AboutUsInfo/RandomText"


function LandingPage() {
    return(
    <div className="LandingPage">
      <AboutUsInfo
      title={RandomText.title}
      text={RandomText.text}/>
    </div>)
}
export {LandingPage};