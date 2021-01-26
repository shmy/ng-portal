import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header.component";
import {AvatarModule} from "primeng/avatar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MenuModule} from "primeng/menu";
import {HeaderService} from "./header.service";
import {SidebarModule} from "primeng/sidebar";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AvatarModule,
    OverlayPanelModule,
    MenuModule,
    SidebarModule,
    RatingModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  providers: [HeaderService]

})
export class HeaderModule {
}
