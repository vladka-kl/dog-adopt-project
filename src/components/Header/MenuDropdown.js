import {
  DropdownMenu,
  MenuConfigurationProvider,
  MenuItem,
} from "@react-md/menu";
import { Configuration } from "@react-md/layout";

import { Link } from "react-router-dom";
import React from "react";
import { Styleshare } from "styled-icons/simple-icons";
import styles from "./Header.module.css";

export const MenuDropdown = ({ isOpen }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.Burger1} />
      <div className={styles.Burger2} />
      <div className={styles.Burger3} />
    </div>

    //     <Configuration>
    //       <MenuConfigurationProvider>
    //         <DropdownMenu id="nested-dropdown-menus" buttonChildren="Dropdown">
    //           <MenuItem>
    //             <Link to="./AbousInfo">About us</Link>
    //           </MenuItem>
    //           <MenuItem>
    //             <Link to="./RandomDog">Random Dog Pic</Link>
    //           </MenuItem>
    //           <SubMenu depth={0} index={0} buttonChildren={undefined} />
    //           <MenuItem>
    //             <Link to="./SubMenu">Breeds Info</Link>
    //           </MenuItem>
    //           <MenuItem>
    //             <Link to="./ContactUs">Contact us</Link>
    //           </MenuItem>
    //         </DropdownMenu>
    //       </MenuConfigurationProvider>
    //     </Configuration>
  );
};
