import {Component, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {Router} from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
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
      icon: "pi pi-fw pi-plus",
      command: () => {
        this.op.hide();
        this.router.navigateByUrl("/login", {replaceUrl: true});
      }
    },
  ];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getInitializeUserService()
      .subscribe(e => {
        console.log(e);
      }, e => console.log(e), () => {
        console.log("complete");
      });
  }
}
