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
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: "100%" }}>
      {arr.map((item, index) => (
        <EnhancedListItemButton
          key={index}
          id={item.id}
          text={item.text}
          item={item.icon}
          onClick={handleClickOpen}
          menu={item.menu}
        />
      ))}
    </List>
  );
};
