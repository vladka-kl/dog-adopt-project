import {
  DropdownMenu,
  MenuConfigurationProvider,
  MenuItem,
} from "@react-md/menu";
import { Configuration } from "@react-md/layout";
import { BreedList } from "./BreedList";
import { Link } from "react-router-dom";

export const MenuDropdown = () => {
  return (
    <Configuration>
      <MenuConfigurationProvider>
        <DropdownMenu id="nested-dropdown-menus" buttonChildren="Dropdown">
          <MenuItem>
            <Link to="./AbousInfo">About us</Link>
          </MenuItem>
          <MenuItem>
            <Link to="./RandomDog">Random Dog Pic</Link>
          </MenuItem>
          <BreedList depth={0} index={0} />
          <MenuItem>
            <Link to="./FullDogsInfo">Breeds Info</Link>
          </MenuItem>
          <MenuItem>
            <Link to="./ContactForm">Contact us</Link>
          </MenuItem>
        </DropdownMenu>
      </MenuConfigurationProvider>
    </Configuration>
  );
};