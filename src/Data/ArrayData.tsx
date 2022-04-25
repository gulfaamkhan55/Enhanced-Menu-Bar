import HomeIcon from "@mui/icons-material/Home";
import { SlipsMenu } from "../Components/T4Menu/T4Menu";
export const ArrayData = [
  {
    id: 1,
    text: "Home",
    open: true,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "Dashboard",
      },
      {
        menuId: 2,
        text: "Client List",
      },
    ],
  },
  {
    id: 2,
    text: "People",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "Employee",
      },
      {
        menuId: 2,
        text: "Vendors",
      },
      {
        menuId: 3,
        text: "Filing Resources",
      },
    ],
  },
  {
    id: 3,
    text: "Adjustment",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "Options",
      },
      {
        menuId: 2,
        text: "Adjustments",
      },
      {
        menuId: 3,
        text: "T4 Report",
      },
      {
        menuId: 4,
        text: "RL1 Report",
      },
    ],
  },
  {
    id: 4,
    text: "Audit",
    open: false,
    icon: <HomeIcon />,
    menu: [
      {
        menuId: 1,
        text: "Filing",
      },
      {
        menuId: 2,
        text: "PIER Review",
      },
    ],
  },
  {
    id: 5,
    text: "Compliance",
    open: false,
    icon: <HomeIcon />,
    menu: <SlipsMenu />,
  },
  {
    id: 6,
    text: "Report",
    open: false,
    icon: <HomeIcon />,

    menu: [
      {
        menuId: 1,
        text: "Employees",
      },
      {
        menuId: 2,
        text: "Vendors",
      },
      {
        menuId: 3,
        text: "T4",
      },
      {
        menuId: 4,
        text: "RL1",
      },
      {
        menuId: 5,
        text: "T4A",
      },
      {
        menuId: 6,
        text: "Invoices",
      },
    ],
  },
  {
    id: 7,
    text: "logout",
    icon: <HomeIcon />,
  },
];
