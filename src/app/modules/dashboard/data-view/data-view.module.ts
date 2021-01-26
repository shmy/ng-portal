import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import {DataViewRoutingModule} from "./data-view-routing.module";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DataViewRoutingModule,
    SharedModule.forChild()
  ]
})
export class DataViewModule { }
