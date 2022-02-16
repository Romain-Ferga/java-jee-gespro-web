import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GpEmployeeComponent} from "./views/gp-employee/gp-employee/gp-employee.component";

const routes: Routes = [
  {path: '', component: GpEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
