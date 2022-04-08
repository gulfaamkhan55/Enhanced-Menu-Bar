import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { EnhancedLeftMenu } from "../Enhanced_Left_Menu/EnhancedLeftMenu";

export interface IEnhancedListItemButton {
  id: number;
  text: string;
  item: string;
  onClick: any;
  open: any;
  menu: {
    menuId: number;
    text: string;
  }[];
}

export const EnhancedListItemButton: React.FC<IEnhancedListItemButton> = ({
  id,
  text,
  item,
  onClick,
  open,
  menu,
}) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{item}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <List>
          {menu.map((menuItem) => {
            <ListItemButton key={id} onClick={onClick}>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>;
          })}
        </List>
      </Collapse>
    </>
  );
};
