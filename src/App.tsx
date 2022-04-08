import "./App.css";
import { EnhancedLeftMenu } from "./Components/Enhanced_Left_Menu/EnhancedLeftMenu";
import HomeIcon from "@mui/icons-material/Home";
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
  // {
  //   id: 2,
  //   text: "People",
  //   icon: "Icon 2",
  // },
  // {
  //   id: 3,
  //   text: "Adjustment",
  //   icon: "Icon 2",
  // },
  // {
  //   id: 4,
  //   text: "Audit",
  //   icon: "Icon 2",
  // },
  // {
  //   id: 5,
  //   text: "Compliance",
  //   icon: "Icon 2",
  // },
  // {
  //   id: 6,
  //   text: "Report",
  //   icon: "Icon 2",
  // },
  // {
  //   id: 7,
  //   text: "Logout",
  //   icon: "Icon 2",
  // }
];

function App() {
  return (
    <div className="App">
      <EnhancedLeftMenu arr={arr} />
    </div>
  );
}

export default App;
