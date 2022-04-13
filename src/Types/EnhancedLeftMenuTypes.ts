import { SvgIconTypeMap } from "@mui/material";

export interface ISubMenuListItemButton {
  menuId: number;
  text: string;
}

export interface IEnhancedListItemButton {
  open: boolean;
  onClick: any;
  data: any
}