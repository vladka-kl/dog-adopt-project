import {
  DropdownMenu,
  MenuConfigurationProvider,
  MenuItem,
} from "@react-md/menu";
import { Configuration } from "@react-md/layout";
import { SubMenu } from "./SubMenu";
import { Link } from "react-router-dom";
import React from 'react';

export const MenuDropdown = () => {
  return (
    <Configuration>
      <MenuConfigurationProvider>
        <DropdownMenu
          id='nested-dropdown-menus'
          buttonChildren='Dropdown'
        >
          <MenuItem>
            <Link to='./AbousInfo'>About us</Link>
          </MenuItem>
          <MenuItem>
            <Link to='./RandomDog'>Random Dog Pic</Link>
          </MenuItem>
          <SubMenu depth={0} index={0} buttonChildren={undefined} />
          <MenuItem>
            <Link to='./Breedsinfo'>Breeds Info</Link>
          </MenuItem>
          <MenuItem>
            <Link to='./ContactUs'>Contact us</Link>
          </MenuItem>
        </DropdownMenu>
      </MenuConfigurationProvider>
    </Configuration>
  );
};
