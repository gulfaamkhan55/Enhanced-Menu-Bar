import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import { IProps } from "../../Types/EnhancedLeftMenuTypes";

const CustomizedButton = styled(ListItemButton)`
  :hover {
    color: #996600;      
    // backgroundColor: #996600;
  }
  // '& .MuiListItemButton-root': {
    
  // }
`;

export const EnhancedListItemButton: React.FC<IProps> = ({
  item,
  activeColor,
  onClick,
  onListItemClick,
}) => {
  const handleClick = (id: number) => {
    onClick(id);
  };

  return (
    <>
      <ListItemButton
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />        
        {item.menu ? ( item.open ? <ExpandLess /> : <ExpandMore />) : ""
      }

        
      </ListItemButton>
      <Collapse in={item.open} timeout="auto" unmountOnExit>
        {Array.isArray(item.menu) ? (
          <List sx={{ pl: 7 }}>
            {item.menu &&
              item.menu.length > 0 &&
              item.menu.map((eachItem: { menuId: number; text: string }) => (
                <CustomizedButton                  
                  key={eachItem.menuId}
                >
                  <ListItemText primary={eachItem.text} />
                </CustomizedButton>
              ))}
          </List>
        ) : (
          item.menu
        )}
      </Collapse>
    </>
  );
};
