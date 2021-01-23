import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./shared/pages/landing/landing.component";
import {LoginComponent} from "./shared/pages/login/login.component";
import {NotFoundComponent} from "./shared/pages/not-found/not-found.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
