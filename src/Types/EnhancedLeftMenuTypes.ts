export interface ISubMenuListItemButton {
  menuId: number;
  text: string;
}

export interface IProps {
  key: number;
  item: {
    id: number;
    text: string;
    open?: boolean;
    icon?: any;
    menu?: any;
  };
  activeColor: string;
  onClick: Function;
  onListItemClick: Function;
}

export interface IEnhancedLeftMenu {
  data: any;
}