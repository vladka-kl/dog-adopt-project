import React from "react";
// import styles from "./maps.module.css";

export default function Maps() {
  return (
    <div className="maps">
      <iframe
        width="400"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Hundeheim%20berlin&t=&z=9&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="yes"
        marginheight="20"
        marginwidth="0"
      ></iframe>
    </div>
  );
}
