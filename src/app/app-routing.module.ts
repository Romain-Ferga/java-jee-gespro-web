import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGpOrganisationComponent } from './views/edit-gp-organisation/edit-gp-organisation.component';
import { GpEmployeeComponent } from "./views/gp-employee/gp-employee/gp-employee.component";
import { GpOrganisationsComponent } from './views/gp-organisations/gp-organisations.component';

const routes: Routes = [
  { path: '', component: GpEmployeeComponent },
  {path: 'addresses', loadChildren:()=> import('./views/gp-addresses/gp-addresses.module').then(
    m=>m.GpAddressesModule
  )},
  {
    path: 'organisations',  loadChildren:()=> import('./views/gp-organisations/gp-organisations.module').then(
      m=>m.GpOrganisationsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
