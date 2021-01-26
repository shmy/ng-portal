import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RoleComponent} from "./role/role.component";
import {UserComponent} from "./user/user.component";
import {NotFoundComponent} from "../../../shared/pages/not-found/not-found.component";
import {AccessCode} from "../../../shared/constants/accessCode";

const routes: Routes = [
  {path: "role", component: RoleComponent, data: {accessCodeList: [AccessCode.AUTHORITY_ROLE_LOOKUP]}},
  {path: "user", component: UserComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorityRoutingModule {
}
