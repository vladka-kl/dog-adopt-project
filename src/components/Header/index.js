import { Logo } from "./Logo";
import { MenuDropdown } from "./MenuDropdown";
import { NavBar } from "./NavBar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <Logo />
      <MenuDropdown />
      {/* <NavBar /> */}
    </div>
  );
};
