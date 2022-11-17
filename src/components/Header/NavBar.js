import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../DogsInfo/dropdown';
import styles from './Header.module.css';

const NavBar = ({ dogsInfoResp, setSelectedDog, selectedDog }) => {
  const navigate = useNavigate();
  const handleSelect = event => {
    setSelectedDog(
      dogsInfoResp.find(dog => dog.name === event.target.value)
    );
    navigate('/breed-info');
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuListItem}>
          <Link to='/' className={styles.textLink}>
            About us
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Dropdown
            dogsInfoResp={dogsInfoResp}
            onSelect={handleSelect}
            className={styles.desktopNavbar}
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
