import styles from "./dogsInfo.module.css";
import React from "react";

const Dropdown = ({ dogsInfoResp, onSelect }) => {
  return (
    <select onChange={onSelect} className={styles.dropdown}>
      <option>Choose a breed</option>
      {dogsInfoResp.map((element) => (
        <option key={element.id}>{element.name}</option>
      ))}
    </select>
  );
};

export { Dropdown };
