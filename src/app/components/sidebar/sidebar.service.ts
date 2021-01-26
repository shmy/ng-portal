import { Injectable } from "@angular/core";

@Injectable()
export class SidebarService {
  get isCollapsed(): boolean {
    return this.collapsed;
  }
  private collapsed = false;
  constructor() { }
  toggle(): void {
    this.collapsed = !this.collapsed;
  }
  open(): void {
    this.collapsed = false;
  }
  close(): void {
    this.collapsed = true;
  }
}
