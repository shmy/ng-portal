import {Component, OnInit, ViewChild} from "@angular/core";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {Router} from "@angular/router";
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("op", {static: true}) private op!: OverlayPanel;
  profileMenus: MenuItem[] = [
    {
      label: "个人中心",
      icon: "pi pi-fw pi-user",
      command: () => {
        this.op.hide();
        this.router.navigateByUrl("/profile", {replaceUrl: false});
      }
    },
    {
      label: "退出登录",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        this.op.hide();
        this.router.navigateByUrl("/login", {replaceUrl: true});
      }
    },
  ];
  constructor(private sidebarService: SidebarService, private router: Router) { }

  ngOnInit(): void {
  }

  handleToggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
