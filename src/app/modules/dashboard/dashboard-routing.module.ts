import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {NotFoundComponent} from "../../shared/pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {path: "authority", loadChildren: () => import("./authority/authority.module").then(m => m.AuthorityModule)},
      {path: "data-view", loadChildren: () => import("./data-view/data-view.module").then(m => m.DataViewModule)},
    ]
  },
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
