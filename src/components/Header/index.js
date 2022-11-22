import { Logo } from "./Logo";
import NavBar from "./NavBar";
import styles from "./Header.module.css";
import React from "react";

const Header = ({ dogsInfoResp, setSelectedDog, selectedDog }) => {
  return (
    <div className={styles.mainHeader}>
      <Logo />
      <NavBar
        setSelectedDog={setSelectedDog}
        dogsInfoResp={dogsInfoResp}
        className={styles.desktopNavbar}
        selectedDog={selectedDog}
      />
    </div>
  );
};

export default Header;
