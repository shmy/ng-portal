import {Component, OnInit} from "@angular/core";

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

  constructor() {
  }

  ngOnInit(): void {
  }
}
