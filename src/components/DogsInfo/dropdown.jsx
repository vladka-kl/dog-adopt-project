import styles from "./dogsInfo.module.css"
import { breedsData } from "./data";
import React from "react"
const Dropdown = props => {
    return (
      <select onChange={props.onSelect} className={styles.dropdown}>
        <option>Choose your breed</option>
        {breedsData.map((singleBreed, index) => (
          <option key={index}> {singleBreed.name}</option>
        ))}
      </select>
    );
}

export { Dropdown };
