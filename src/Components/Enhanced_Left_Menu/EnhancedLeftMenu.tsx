import React, { useState } from "react";
import * as _ from "lodash";
import List from "@mui/material/List";

import { ArrayData } from "../../Data/ArrayData";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";

export const EnhancedLeftMenu = () => {
  const [menu, setMenu] = useState(ArrayData);

  const onMenuItemClickHandler = (menuId: number) => {
    console.log("$$$$$", menuId);
    const menuCopy = _.cloneDeep(menu);
    for (let index = 0; index < menuCopy.length; index++) {
      if (menuCopy[index].id === menuId) {
        menuCopy[index].open = !menuCopy[index].open;
      } else {
        menuCopy[index].open = false;
      }
    }
    console.log("previous -> $$$$$", menu);
    console.log("next -> $$$$$", menuCopy);
    setMenu(menuCopy);
  };
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      {menu.map((item, index) => (
        <EnhancedListItemButton
          key={index}
          item={item}
          onClick={onMenuItemClickHandler}
        />
      ))}
    </List>
  );
};
