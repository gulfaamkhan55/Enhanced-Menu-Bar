export interface ISubMenuListItemButton {
  menuId: number;
  text: string;
}

export interface IProps {
  item: {
    id: number;
    text: string;
    open?: boolean;
    icon: any;
    menu: any;
  };
  onClick: Function;
}
