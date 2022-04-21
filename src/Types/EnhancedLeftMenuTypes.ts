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
    icon: any;
    menu: any;
  };
  onClick: Function;
}
