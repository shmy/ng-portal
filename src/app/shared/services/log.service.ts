import {Injectable} from "@angular/core";
type LogType = "error" | "warning" | "info";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor() {
  }

  private static log(type: LogType, message?: any, ...optionalParams: any[]): void {
    // @ts-ignore
    console[type](`[${new Date().toLocaleString()}] ${type}: `, message, ...optionalParams);
  }

  info(message?: any, ...optionalParams: any[]): void {
    LogService.log("info", message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    LogService.log("error", message, ...optionalParams);
  }

  warning(message?: any, ...optionalParams: any[]): void {
    LogService.log("warning", message, ...optionalParams);
  }
}
