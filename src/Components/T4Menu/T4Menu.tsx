import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { EnhancedSubMenu } from "../EnhancedSubMenu/EnhancedSubMenu";

const data = [
  {
    id: 1,
    text: "T4",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "List",
      },
      {
        menuId: 2,
        text: "Setup",
      },
      {
        menuId: 3,
        text: "Summary",
      },
      {
        menuId: 4,
        text: "Summary Reduced EI",
      },
      {
        menuId: 5,
        text: "PD27 E Setup",
      },
    ],
  },
  {
    id: 2,
    text: "T4A",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "List",
      },
      {
        menuId: 2,
        text: "Setup",
      },
      {
        menuId: 3,
        text: "Summary",
      },
    ],
  },
  {
    id: 3,
    text: "RL-1",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "List",
      },
      {
        menuId: 2,
        text: "Setup",
      },
      {
        menuId: 3,
        text: "Summary",
      },
      {
        menuId: 4,
        text: "Setting",
      },
    ],
  },
];

export const SlipsMenu = () => {
  return <EnhancedSubMenu data={data} />;
};
