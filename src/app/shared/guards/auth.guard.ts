import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!childRoute.data?.accessCodeList) {
      return true;
    }
    const hasAccessCodes = this.userService.hasAccessCodes(this.userService.userInfo.accessCodeMap, childRoute.data.accessCodeList);
    if (!hasAccessCodes) {
      return this.router.parseUrl("/forbidden");
    }
    return true;
  }

}
