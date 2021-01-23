import {Component, Input, OnInit} from "@angular/core";
import {ISideMenu} from "../type";

@Component({
  selector: "app-side-menu-item",
  templateUrl: "./side-menu-item.component.html",
  styleUrls: ["./side-menu-item.component.scss"]
})
export class SideMenuItemComponent implements OnInit {
  isOpen = false;
  @Input() menu: ISideMenu | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
