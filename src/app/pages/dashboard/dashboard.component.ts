import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {SidebarService} from "../../modules/sidebar/sidebar.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private sidebarService: SidebarService) {
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
