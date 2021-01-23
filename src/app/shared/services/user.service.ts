import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
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
    return this.http.post<LoginResult>("/login", body);
  }

  getInitializeUserService(): Observable<UserInfo> {
    return forkJoin([
      this.getUserInfoService(),
      this.getUserAccessCodeService()
    ])
      .pipe(
        tap(() => console.log(123)),
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
    }));
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
