import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export interface IEnhancedListItemButton {
  id: number;
  text: string;
  open: boolean;
  item: string;
  onClick: any;
  menu: {
    menuId: number;
    text: string;
  }[];
}

export const EnhancedListItemButton: React.FC<IEnhancedListItemButton> = ({
  id,
  text,
  open,
  item,
  onClick,
  menu,
}) => {
  const handleClick = (id: number) => {
    onClick(id);
  };
  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(id);
        }}
      >
        <ListItemIcon>{item}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <List>
          {menu.map((menuItem) => {
            <ListItemButton
              key={id}
              onClick={() => {
                onClick(id);
              }}
            >
              <ListItemText primary={menuItem.text} />
            </ListItemButton>;
          })}
        </List>
      </Collapse>
    </>
  );
};
