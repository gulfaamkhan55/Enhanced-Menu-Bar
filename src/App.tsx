import "./App.css";
import { EnhancedLeftMenu } from "./Components/Enhanced_Left_Menu/EnhancedLeftMenu";
import { ArrayData } from "./Data/ArrayData";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const [data, setData] = useState({
    listId: -1,
    subMenu: [{}],
  });

  const handleClickOpen = (id: number) => {
    console.log(id);
    setData({
      listId: -1,
      subMenu: [{}],
    });
    ArrayData.map((item) => {
      if (item.id === id) {
        item.menu.map((menuItem) => {
          console.log("Menu Item ===> ", menuItem);
          setData({
            listId: id,
            subMenu: [
              ...data.subMenu,
              {
                menuId: menuItem.menuId,
                text: menuItem.text,
              },
            ],
          });
          console.log(menuItem.menuId);
          console.log(menuItem.text);
          setOpen(!open);
        });
      }
    });
  };
  return (
    <div className="App">
      <EnhancedLeftMenu onClick={handleClickOpen} open={open} data={data} />
    </div>
  );
}

export default App;
