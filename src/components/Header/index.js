import { Logo } from "./Logo";
import { MenuDropdown } from "./MenuDropdown";
import NavBar from "./NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <Logo />
      {/* <MenuDropdown /> */}
      <NavBar />
    </header>
  );
};

export default Header;
