import "./App.css";
import { EnhancedLeftMenu } from "./Components/Enhanced_Left_Menu/EnhancedLeftMenu";
import HomeIcon from "@mui/icons-material/Home";
import React, { useState } from "react";
const arr = [
  {
    id: 1,
    text: "Home",
    icon: <HomeIcon />,
    open: true,
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
    icon: <HomeIcon />,
    open: false,
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
    icon: <HomeIcon />,
    open: false,
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
    icon: <HomeIcon />,
    open: false,
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
    icon: <HomeIcon />,
    open: false,
    menu: [
      {
        menuId: 1,
        text: "t4",
      },
      {
        menuId: 2,
        text: "T4A",
      },
      {
        menuId: 3,
        text: "RL-1",
      },
    ],
  },
  {
    id: 6,
    text: "Report",
    icon: <HomeIcon />,
    open: false,
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
    open: false,
    menu: [],
  },
];

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = (id: number) => {
    arr.map((item) => {
      if (item.id == id) {
        setOpen(!open);
      }
    });
  };
  return (
    <div className="App">
      <EnhancedLeftMenu onClick={handleClickOpen} open={open} arr={arr} />
    </div>
  );
}

export default App;
