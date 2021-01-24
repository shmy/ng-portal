import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";
import { mock } from "mockjs";

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResult {
  token: string;
}

type AccessCodeMap = { [key: string]: boolean };

interface UserInfo {
  username?: string;
  accessCodeMap?: AccessCodeMap;
}

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) {
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
      "DASHBOARD_LOOKUP",
      "POST_LOOKUP",
      "APPLICATION_LOOKUP",
      "DASHBOARD_LOGOUT",
    ]));
  }
}
