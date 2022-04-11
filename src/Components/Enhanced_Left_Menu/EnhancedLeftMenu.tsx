import * as React from "react";
import List from "@mui/material/List";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";

export interface IEnhancedListItemButton {
  open: boolean;
  onClick: any;
  arr: {
    id: number;
    text: string;
    icon: any;
    open: boolean;
    menu: {
      menuId: number;
      text: string;
    }[];
  }[];
}

export const EnhancedLeftMenu: React.FC<IEnhancedListItemButton> = ({
  open,
  onClick,
  arr,
}) => {
  return (
    <List sx={{ width: "100%" }}>
      {arr.map((item, index) => (
        <EnhancedListItemButton
          key={index}
          id={item.id}
          open={open}
          text={item.text}
          item={item.icon}
          onClick={onClick}
          menu={item.menu}
        />
      ))}
    </List>
  );
};
