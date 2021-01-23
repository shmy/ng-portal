import {Injectable} from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import {Observable, pipe, range, timer, zip} from "rxjs";
import {catchError, filter, map, mergeMap, retry, retryWhen, tap, timeout} from "rxjs/operators";
import {environment} from "../../../environments/environment";


// function backoff(maxTries, ms) {
//   return pipe(
//     retryWhen(attempts => zip(range(1, maxTries), attempts)
//       .pipe(
//         map(([i]) => i * i),
//         mergeMap(i =>  timer(i * ms))
//       )
//     )
//   );
// }
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private getFullUrl(urlFragment: string): string {
    if (/^http(s?):\/\//.test(urlFragment)) {
      return urlFragment;
    }
    const delimiter = /^\//.test(urlFragment) ? "" : "/";
    return environment.baseUrl + delimiter + urlFragment;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: this.getFullUrl(req.url),
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer this is token"
      })
    });
    return next.handle(req).pipe(
      timeout(20000),
      retry(2),
      filter((event) => event instanceof HttpResponse),
      tap((event) => console.log("[TokenInterceptor]", req.url, req.method, (event as HttpResponse<any>).body)),
      catchError((error: any, caught) => {
        throw error;
      })
    );
  }
}
