import {Directive, Input} from "@angular/core";

@Directive({
  selector: "[appVar]",
  exportAs: "appVar"
})
export class VarDirective {
  @Input() appVar: any;
  constructor() { }

}
