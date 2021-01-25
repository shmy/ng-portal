import {Component} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

interface IMenu {
  name: string;
  path: string;
  open?: boolean;
  items?: IMenu[];
}

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  menus: IMenu[] = [
    {path: "/dashboard/authority/role", name: "角色管理"},
    {path: "/dashboard/authority/user", name: "人员管理"},
    {
      path: "/dashboard/system", name: "系统管理", items: [
        {path: "/dashboard/system/params", name: "参数管理"},
      ]
    },
    {
      path: "/dashboard/other", name: "其他管理", items: [
        {path: "/dashboard/other/other", name: "其他"},
        {path: "/dashboard/other/other1", name: "其他下级", items: [
            {path: "/dashboard/other/other1/other1", name: "没有其他"},
          ]},
      ]
    },
  ];
  currentPath = "";
  constructor(private router: Router) {
    this.currentPath = this.router.url;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event) => {
        this.currentPath = (event as NavigationEnd).url;
      });
  }
  getIsMatch(menu: IMenu): boolean {
    if (menu.open !== undefined) {
      return menu.open;
    }
    const isMatch = this.currentPath.startsWith(menu.path);
    menu.open = isMatch;
    return isMatch;
  }
  getPaddingLeft(level: number): string {
    return level * 16 + 24 + "px";
  }
}
