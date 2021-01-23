export interface ISideMenu {
  label: string;
  children?: ISideMenu[];
}
export type ISideMenus = ISideMenu[];
