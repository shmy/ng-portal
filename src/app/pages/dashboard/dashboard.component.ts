import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {SidebarService} from "../../modules/sidebar/sidebar.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {

  constructor(private userService: UserService, public sidebarService: SidebarService) {
    userService.getInitializeUserService().subscribe();
  }
}
