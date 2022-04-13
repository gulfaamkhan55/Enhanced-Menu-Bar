import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import React, { useState } from "react";
import { ArrayData } from "../../Data/ArrayData";

export interface IProps {
  id: number;
  text: string;
  open: boolean;
  icon: string;
  onClick: any;
  data: any;
}

export const EnhancedListItemButton: React.FC<IProps> = ({
  id,
  text,
  open,
  icon,
  onClick,
  data,
}) => {
  const handleClick = (id: number) => {
    onClick(id);
  };
  const { listId, subMenu } = data;
  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(id);
        }}
      >
        <ListItemIcon>{"Icon"}</ListItemIcon>
        <ListItemText primary={text} />
        {data.listId == id ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={data.listId == id}>
        <List>
          {ArrayData.map((item) => {
            item.id == data.listId &&
              data.subMenu.map((eachItem: any) => {
                console.log("======> ", eachItem.menuId);
                console.log("======> ", eachItem.text);
                // <ListItemButton>
                //   <ListItemText primary={item.text} />
                // </ListItemButton>;
              });
          })}
        </List>
      </Collapse>
    </>
  );
};
