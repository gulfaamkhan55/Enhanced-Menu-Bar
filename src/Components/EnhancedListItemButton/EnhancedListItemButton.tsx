import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { IProps } from "../../Types/EnhancedLeftMenuTypes";

export const EnhancedListItemButton: React.FC<IProps> = ({ item, onClick }) => {
  const handleClick = (id: number) => {
    onClick(id);
  };
  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />

        {item.menu && item.menu.length > 0 && item.open ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      <Collapse in={item.open} timeout="auto" unmountOnExit>
        {Array.isArray(item.menu) ? 
          <List sx={{ pl: 7 }}>
            {item.menu &&
              item.menu.length > 0 &&
              item.menu.map((eachItem: { menuId: number; text: string }) => (
                <ListItemButton key={eachItem.menuId}>
                  <ListItemText primary={eachItem.text} />
                </ListItemButton>
              ))}
          </List>
          :
          item.menu
        }

      </Collapse>
    </>
  );
};
