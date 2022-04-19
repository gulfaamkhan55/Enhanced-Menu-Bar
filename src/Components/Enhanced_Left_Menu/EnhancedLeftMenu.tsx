import React, { useState, useEffect } from "react";

import List from "@mui/material/List";

import { ArrayData } from "../../Data/ArrayData";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";

export const EnhancedLeftMenu = () => {
  const [menu, setMenu] = useState(ArrayData);

  const onMenuItemClickHandler = (menuId: number) => {
    // TODO: create a copy of menu
    const menuCopy = menu;
    for (let index = 0; index < menu.length; index++) {
      menuCopy[index].open = false;
      if (menu[index].id === menuId) {
        menuCopy[index].open = !menuCopy[index].open;
      } else {
        menuCopy[index].open = false;
      }
    }
    setMenu(menuCopy);
    // setMenu(copy of menu)
  };
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      {menu.map((item, index) => (
        <EnhancedListItemButton
          key={index}
          item={item}
          // id={item.id}
          // text={item.text}
          // icon={item.icon}
          onClick={onMenuItemClickHandler}
          // open={item.open}
        />
      ))}
    </List>
  );
};
