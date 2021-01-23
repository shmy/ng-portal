import {Component, Input, OnInit} from "@angular/core";
import {ISideMenus} from "./type";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {

  @Input() menus: ISideMenus = [];
  constructor() { }

  ngOnInit(): void {
  }

}
