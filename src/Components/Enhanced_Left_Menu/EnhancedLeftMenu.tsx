import * as React from "react";
import List from "@mui/material/List";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";

export interface IEnhancedListItemButton {
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
  arr,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: "100%" }}>
      {arr.map((item) => (
        <EnhancedListItemButton
          key={item.id}
          id={item.id}
          text={item.text}
          item={item.icon}
          onClick={handleClickOpen}
          open={open}
          menu={item.menu}
        />
      ))}
    </List>
  );
};
