import { DropdownMenu, MenuItem } from "@react-md/menu";
import React from 'react';

export const SubMenu = ({ index, depth, buttonChildren }) => {
  return (
    <div>
      <DropdownMenu
        id={`infinite-dropdown-menu-${depth + 1}-${index + 1}`}
        buttonChildren={buttonChildren && `Item ${index + 3}`}
      >
        Here comes the List of all Breeds, fetched from the API!!!
      </DropdownMenu>
    </div>
  );
};
