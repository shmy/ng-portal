import { Component, OnInit } from "@angular/core";
import {SidebarService} from "./sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }
  get sidebarWidth(): string {
    return this.sidebarService.isCollapsed ? "0" : "240px";
  }
}
