import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {InputTextModule} from "primeng/inputtext";
import {AvatarModule} from "primeng/avatar";
import {LogService} from "./services/log.service";
import {httpInterceptorProviders} from "./interceptors";
import {HttpClientModule} from "@angular/common/http";
import {routeReuseStrategies} from "./route-reuse-strategies";
import {RouterModule} from "@angular/router";
import {VarDirective} from "./directives/var.directive";
import {UserService} from "./services/user.service";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MenuModule} from "primeng/menu";

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    NotFoundComponent,
    VarDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    OverlayPanelModule,
    MenuModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    OverlayPanelModule,
    MenuModule,
  ],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LogService,
        UserService,
        ...httpInterceptorProviders,
        ...routeReuseStrategies,
      ]
    };
  }

  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
