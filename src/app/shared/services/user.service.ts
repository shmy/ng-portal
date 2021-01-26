import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of} from "rxjs";
import {delay, map, tap} from "rxjs/operators";
import { mock } from "mockjs";
import {IMenu} from "../../components/menu/menu.component";
import {AccessCode} from "../constants/accessCode";

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResult {
  token: string;
}

export type AccessCodeMap = { [key: string]: boolean };
export type UserProfile = {user: UserInfo, menus: IMenu[] };
interface UserInfo {
  username?: string;
  accessCodeMap?: AccessCodeMap;
}
const getMenuAllIn = (): IMenu[] => {
  return [
    {
      path: "/dashboard/authority",
      name: "用户管理",
      items: [
        {
          path: "/dashboard/authority/role",
          name: "角色管理",
          accessCodeList: [AccessCode.AUTHORITY_ROLE_LOOKUP]
        },
        {
          path: "/dashboard/authority/user",
          name: "人员管理",
          accessCodeList: [AccessCode.AUTHORITY_USER_LOOKUP]
        }
      ]
    },
    {
      path: "/dashboard/data-view",
      name: "数据展示",
      items: [
        {
          path: "/dashboard/data-view/table",
          name: "表格"
        }
      ]
    }
  ];
};
@Injectable({
  providedIn: "root"
})
export class UserService {
  private $profile: UserProfile = {user: {}, menus: []};
  get profile(): UserProfile {
    return this.$profile;
  }
  set profile(profile: UserProfile) {
    this.$profile = profile;
  }
  get userInfo(): UserInfo{
    return this.profile.user;
  }
  get userMenus(): IMenu[] {
    return this.profile.menus;
  }
  constructor() {
  }
  private formatMenu(menus: IMenu[], accessCodeMap?: AccessCodeMap): IMenu[] {
    const result: IMenu[] = [];
    for (const menu of menus) {
      if (menu.items) {
        menu.items = this.formatMenu(menu.items, accessCodeMap);
        if (menu.items.length > 0) {
          // menu.open = false;
          result.push(menu);
        }
      } else {
        if (this.hasAccessCodes(accessCodeMap, menu.accessCodeList)) {
          result.push(menu);
        }
      }
    }
    return result;
  }
  setUpProfile(user: UserInfo): void {
    this.profile.user = user;
    this.profile.menus = this.formatMenu(getMenuAllIn(), user.accessCodeMap);
  }
  hasAccessCodes(accessCodeMap?: AccessCodeMap, requiredAccessCodeList?: string[]): boolean {
    if (!requiredAccessCodeList) {
      return true;
    }
    if (!accessCodeMap) {
      return false;
    }
    for (const code of requiredAccessCodeList) {
      if (!accessCodeMap[code]) {
        return false;
      }
    }
    return true;
  }

  userLoginService(body: LoginParams): Observable<LoginResult> {
    return of(mock({
      token: "@guid"
    })).pipe(
      delay(500),
    );
  }

  getInitializeUserService(): Observable<UserInfo> {
    return forkJoin([
      this.getUserInfoService(),
      this.getUserAccessCodeService()
    ])
      .pipe(
        map(([userInfo, accessCodeList]) => {
          const accessCodeMap: AccessCodeMap = {};
          (accessCodeList as string[]).forEach(accessCode => {
            accessCodeMap[accessCode] = true;
          });
          userInfo.accessCodeMap = accessCodeMap;
          return userInfo;
        }),
        tap(userInfo => {
          this.setUpProfile(userInfo);
        })
      );
  }

  getUserInfoService(): Observable<UserInfo> {
    return of(mock({
      username: "@cname",
      token: "@guid"
    })).pipe(
      delay(500),
    );
  }

  getUserAccessCodeService(): Observable<string[]> {
    return of(mock([
      "AUTHORITY_ROLE_LOOKUP",
      "AUTHORITY_USER_LOOKUP"
    ]));
  }
}
