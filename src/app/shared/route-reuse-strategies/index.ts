import {RouteReuseStrategy} from "@angular/router";
import {AppRouteReuseStrategy} from "./AppRouteReuseStrategy";

export const routeReuseStrategies = [
  {provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy}
];
