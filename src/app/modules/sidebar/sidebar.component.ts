import { Component, OnInit } from "@angular/core";
import {SidebarService} from "./sidebar.service";
import {IMenu} from "../menu/menu.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
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
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  handleMaskClick(): void {
    this.sidebarService.toggle();
  }

  handleNavigate(path: string): void {
    if (window.innerWidth <= 991) {
      this.sidebarService.close();
    }
  }
}
