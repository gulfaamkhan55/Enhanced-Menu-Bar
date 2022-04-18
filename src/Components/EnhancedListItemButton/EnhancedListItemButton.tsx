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

  const handleClick = (id: number) => {
    setListId(id);
    console.log(id);
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
        <List>
          {ArrayData.map((item) => {
            item.id === listId &&
              item.menu.map((eachItem: any) => (
                // console.log(eachItem.menuId);
                // console.log(eachItem.text);
                <ListItemButton key={eachItem.menuId}>
                  <ListItemText primary={eachItem.text} />
                </ListItemButton>
              ));
          })}
        </List>
      </Collapse>
    </>
  );
};
