import {Component, Input, OnInit} from "@angular/core";
import {SidebarService} from "./sidebar.service";
import {IMenu} from "../menu/menu.component";
import {AccessCode} from "../../shared/constants/accessCode";
import {AccessCodeMap, UserService} from "../../shared/services/user.service";



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService, public userService: UserService) { }

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
