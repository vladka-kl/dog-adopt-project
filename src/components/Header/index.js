import { Logo } from './Logo';
import NavBar from './NavBar';
import styles from './Header.module.css';
import React from 'react';

// [dropdownOpen, setDropdownOpen] = useState(false);

// const toggleDropdown = () => {
//   setDropdownOpen(!dropdownOpen);
// };

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
      {/* <div className={styles.dropdown} onClick={toggleDropdown}>
        <MenuDropdown />
      </div> */}
    </div>
  );
};

export default Header;
