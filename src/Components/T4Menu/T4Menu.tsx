import { EnhancedSubMenu } from "../EnhancedSubMenu/EnhancedSubMenu";

const data = [
  {
    id: 1,
    text: "T4",
    open: false,
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
