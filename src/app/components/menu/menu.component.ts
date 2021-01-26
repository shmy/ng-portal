import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

export interface IMenu {
  name: string;
  path: string;
  accessCodeList?: string[];
  open?: boolean;
  items?: IMenu[];
}

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {

  currentPath = "";
  @Input() menus: IMenu[] = [];
  @Output() onNavigate = new EventEmitter<string>();
  constructor(private router: Router) {
    this.currentPath = this.router.url;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event) => {
        this.currentPath = (event as NavigationEnd).url;
      });
  }
  handleJump(path: string): void {
    this.onNavigate.emit(path);
  }
  getIsMatch(menu: IMenu): boolean {
    if (menu.open !== undefined) {
      return menu.open;
    }
    const isMatch = this.currentPath.startsWith(menu.path);
    menu.open = isMatch;
    return isMatch;
  }
  getPaddingLeft(level: number): string {
    return level + 1 + "rem";
  }
}
