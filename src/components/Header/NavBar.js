<<<<<<< HEAD
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../DogsInfo/dropdown';
import styles from './Header.module.css';
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "../DogsInfo/dropdown";
// import { BurgerIcon } from "./BurgerIcon";
import styles from "./Header.module.css";
>>>>>>> Test

const NavBar = ({ dogsInfoResp, setSelectedDog, selectedDog }) => {
  const navigate = useNavigate();
  const handleSelect = event => {
    setSelectedDog(
      dogsInfoResp.find(dog => dog.name === event.target.value)
    );
    navigate('/breed-info');
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
          <Link to='/' className={styles.textLink}>
            About us
          </Link>
        </li>
        <li className={styles.breedlist}>
          <Dropdown
            className={styles.textLink}
            dogsInfoResp={dogsInfoResp}
            onSelect={handleSelect}
            selectedDog={selectedDog}
            isHeader
          />
        </li>
        <li>
          <Link to='/contact' className={styles.textLink}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
