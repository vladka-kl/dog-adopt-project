import styles from "./dogsInfo.module.css";
import React from "react";

const Dropdown = ({ dogsInfoResp, onSelect, isHeader, selectedDog }) => {
  return (
    <select onChange={onSelect} className={styles.dropdown}>
      <option>Choose a breed</option>
      {dogsInfoResp.map((element, index) => (
        <option key={element.id || index}>{element.name}</option>
      ))}
    </select>
  );
};

export { Dropdown };
