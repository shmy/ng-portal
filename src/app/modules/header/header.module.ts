import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header.component";
import {AvatarModule} from "primeng/avatar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MenuModule} from "primeng/menu";
import {HeaderService} from "./header.service";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AvatarModule,
    OverlayPanelModule,
    MenuModule
  ],
  exports: [HeaderComponent],
  providers: [HeaderService]

})
export class HeaderModule {
}
