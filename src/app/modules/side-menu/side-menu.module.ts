import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideMenuComponent } from "./side-menu.component";
import { SideMenuItemComponent } from "./side-menu-item/side-menu-item.component";



@NgModule({
  declarations: [SideMenuComponent, SideMenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SideMenuComponent, SideMenuItemComponent]
})
export class SideMenuModule { }
