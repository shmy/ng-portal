import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./shared/pages/landing/landing.component";
import {LoginComponent} from "./shared/pages/login/login.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
