import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";
interface ICacheRoute {
  snapshot: ActivatedRouteSnapshot;
  handle: DetachedRouteHandle | null;
  time: number;
}

// 缓存时间 秒
const cacheTime = 5;
export class AppRouteReuseStrategy implements RouteReuseStrategy {
  private cacheRoutes: { [key: string]: ICacheRoute } = {};
  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map(v => v.url.map(segment => segment.toString()).join("/"))
      .join("/");
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = this.getResolvedUrl(route);
    const cacheRoute = this.cacheRoutes[path];
    if (cacheRoute) {
      return cacheRoute.handle;
    }
    return null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getResolvedUrl(route);
    const cacheRoute = this.cacheRoutes[path];
    return cacheRoute && Date.now() / 1000 - cacheRoute.time < cacheTime;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.keep;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.getResolvedUrl(future) === this.getResolvedUrl(curr);
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const path = this.getResolvedUrl(route);
    this.cacheRoutes[path] = {
      snapshot: route,
      handle,
      time: Date.now() / 1000
    };
  }
}
