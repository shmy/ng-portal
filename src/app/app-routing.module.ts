import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./shared/pages/landing/landing.component";
import {LoginComponent} from "./shared/pages/login/login.component";
import {NotFoundComponent} from "./shared/pages/not-found/not-found.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {ForbiddenComponent} from "./shared/pages/forbidden/forbidden/forbidden.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "login", component: LoginComponent},
  {
    path: "dashboard",
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivateChild: [AuthGuard]
  },
  {path: "forbidden", component: ForbiddenComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
