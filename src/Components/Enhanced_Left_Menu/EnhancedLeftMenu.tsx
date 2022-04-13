import * as React from "react";
import List from "@mui/material/List";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";
import { IEnhancedListItemButton } from "../../Types/EnhancedLeftMenuTypes";
import { ArrayData } from "../../Data/ArrayData";

export const EnhancedLeftMenu: React.FC<IEnhancedListItemButton> = ({
  open,
  data,
  onClick,
}) => {
  return (
    <List sx={{ width: "100%" }}>
      {ArrayData.map((item, index) => (
        <EnhancedListItemButton
          open={open}
          key={index}
          id={item.id}
          text={item.text}
          icon={item.icon}
          onClick={onClick}
          data={data}
        />
      ))}
    </List>
  );
};
