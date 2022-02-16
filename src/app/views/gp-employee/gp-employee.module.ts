import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GpEmployeeRoutingModule} from './gp-employee-routing.module';
import {GpEmployeeComponent} from './gp-employee/gp-employee.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GpEmployeeComponent
  ],
  imports: [
    CommonModule,
    GpEmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GpEmployeeModule {
}
