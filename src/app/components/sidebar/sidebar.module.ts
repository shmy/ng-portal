import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import {SidebarService} from "./sidebar.service";
import { MenuModule } from "../menu/menu.module";



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    SidebarService
  ]
})
export class SidebarModule { }
