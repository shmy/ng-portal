import {Component, OnInit, ViewChild} from "@angular/core";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {Router} from "@angular/router";
import {SidebarService} from "../sidebar/sidebar.service";
import * as screenfull from "screenfull";

const defaultFontSize = 14;
const defaultScale = 3;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("op", {static: true}) private op!: OverlayPanel;
  isFullScreen = false;
  profileMenus: MenuItem[] = [
    {
      label: "个人中心",
      icon: "pi pi-fw pi-user",
      command: () => {
        this.op.hide();
        this.router.navigateByUrl("/profile", {replaceUrl: false});
      }
    },
    {
      label: "退出登录",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        this.op.hide();
        this.router.navigateByUrl("/login", {replaceUrl: true});
      }
    },
  ];
  display = false;
  scale = defaultScale;
  constructor(private sidebarService: SidebarService, private router: Router) { }

  ngOnInit(): void {
    (screenfull as any).onchange((s: any) => {
      this.isFullScreen = (screenfull as any).isFullscreen;
    });
  }

  handleToggleSidebar(): void {
    this.sidebarService.toggle();
  }

  handleToggleFullScreen(): void {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }

  handleRate(): void {
    const gapSize = defaultScale - this.scale;
    document.documentElement.style.fontSize = `${defaultFontSize - gapSize}px`;
  }
}
