import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorityRoutingModule } from "./authority-routing.module";
import { RoleComponent } from "./role/role.component";
import { UserComponent } from "./user/user.component";


@NgModule({
  declarations: [RoleComponent, UserComponent],
  imports: [
    CommonModule,
    AuthorityRoutingModule
  ]
})
export class AuthorityModule { }
