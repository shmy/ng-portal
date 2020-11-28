import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AccordionModule} from "primeng/accordion";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  declarations: [LandingComponent, LoginComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    TranslateModule,
    AccordionModule,
    ToggleButtonModule,
    TooltipModule,
    DynamicDialogModule,
    SidebarModule,
    ButtonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
