import {Component} from "@angular/core";
import {SidebarService} from "../../components/sidebar/sidebar.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {

  constructor(public sidebarService: SidebarService) {
  }
}
