import * as React from "react";
import List from "@mui/material/List";
import { EnhancedListItemButton } from "../EnhancedListItemButton/EnhancedListItemButton";
import { ArrayData } from "../../Data/ArrayData";

export const EnhancedLeftMenu = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      {ArrayData.map((item, index) => (
        <EnhancedListItemButton
          key={index}
          id={item.id}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </List>
  );
};
