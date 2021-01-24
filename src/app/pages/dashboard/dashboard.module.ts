import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {SidebarModule} from "../../modules/sidebar/sidebar.module";
import {HeaderModule} from "../../modules/header/header.module";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule.forRoot(),
    SidebarModule,
    HeaderModule
  ]
})
export class DashboardModule {
}
