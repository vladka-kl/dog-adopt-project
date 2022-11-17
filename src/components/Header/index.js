import { Logo } from "./Logo";
import { MenuDropdown } from "./MenuDropdown";
import NavBar from "./NavBar";
import styles from "./Header.module.css";
import React, { useState } from "react";

const Header = ({ dogsInfoResp, setSelectedDog, selectedDog }) => {
  // [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <div className={styles.mainHeader}>
      <Logo />
      <NavBar
        setSelectedDog={setSelectedDog}
        dogsInfoResp={dogsInfoResp}
        className={styles.desktopNavbar}
        selectedDog={selectedDog}
      />
      <div className={styles.dropdown} /*onClick={toggleDropdown}*/>
        <MenuDropdown />
      </div>
    </div>
  );
};

export default Header;
