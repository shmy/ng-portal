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
import {httpInterceptorProviders} from "./interceptors";
import {HttpClientModule} from "@angular/common/http";
import {routeReuseStrategies} from "./route-reuse-strategies";
import {RouterModule} from "@angular/router";
import {VarDirective} from "./directives/var.directive";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MenuModule} from "primeng/menu";
import { ForbiddenComponent } from "./pages/forbidden/forbidden/forbidden.component";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    NotFoundComponent,
    VarDirective,
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
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
    TableModule,
  ],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
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
