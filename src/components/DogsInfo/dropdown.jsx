import styles from "./dogsInfo.module.css"
//import { breedsData } from "./data";
import React from "react"
import axios from "axios";
import { useFetch, useState } from "./dogsFetch";
import { DogsInfo } from "./DogsInfo";



const Dropdown = props => {
    const [dogsInfoResp, errorResp, isLoading] = useFetch(
        `https://api.thedogapi.com/v1/breeds`
    );


    if (isLoading) {
        return <h2>still in process, loading...</h2>;
    }

    if (errorResp) {
        console.log("Error: ", errorResp);
        return <h2>please contact the support</h2>;
    }

    const dogsArray = dogsInfoResp.data;

    return (
        <select onChange={props.onSelect}
            className={styles.dropdown} >
            <option>Choose a breed</option>
            {dogsArray.map(({ id, name }, index) => (
                <option key={id || index}>{name} </option>
            ))}
        </select>
    )
}

export { Dropdown };


