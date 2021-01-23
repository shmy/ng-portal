import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {LogService} from "./services/log.service";
import {SideMenuModule} from "../modules/side-menu/side-menu.module";

@NgModule({
  declarations: [LandingComponent, LoginComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    SideMenuModule,
  ],
  providers: [
    LogService
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
