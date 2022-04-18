import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { ArrayData } from "../../Data/ArrayData";
import { IProps } from "../../Types/EnhancedLeftMenuTypes";

export const EnhancedListItemButton: React.FC<IProps> = ({
  id,
  text,
  icon,
}) => {
  const [listId, setListId] = useState<number>(0);
  const [listSubMenu, setListSubMenu] = useState<any>([]);

  // This method should return array of submenu
  const getSubMenu = (id: number) => {
    const arrayItem = ArrayData.find((item) => item.id === id);
    if (arrayItem) {
      return arrayItem.menu;
    }
  };

  const handleClick = (id: number) => {
    const subMenu = getSubMenu(id);
    if (listId !== id) {
      setListId(id);
    } else {
      setListId(0);
    }
    setListSubMenu(subMenu);
    // console.log(id);
  };
  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(id);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {listId === id ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listId === id} unmountOnExit>
        <List sx={{ pl: 7 }}>
          {listSubMenu.map((eachItem: any) => (
            <ListItemButton key={eachItem.menuId}>
              <ListItemText primary={eachItem.text} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
