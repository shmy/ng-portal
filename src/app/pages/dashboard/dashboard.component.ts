import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  menus = [
    {
      label: "系统管理"
    },
    {
      label: "系统管理"
    },
    {
      label: "系统管理"
    },
    {
      label: "应用管理",
      children: [
        {label: "Android 管理"},
        {label: "WEB 管理", children: [{label: "h5管理"}]}
      ]
    }
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getInitializeUserService()
      .subscribe(e => {
      console.log(e);
    }, e => console.log(e), () => {console.log("complete");});
  }
}
