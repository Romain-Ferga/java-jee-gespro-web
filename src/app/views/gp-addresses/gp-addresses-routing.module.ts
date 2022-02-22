import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGpAddressComponent } from '../edit-gp-address/edit-gp-address.component';
import { GpAddressesComponent } from './gp-addresses.component';

const routes: Routes = [
  { path: '', component: GpAddressesComponent },
  { path: 'nouveau', component: EditGpAddressComponent },
  { path: ':id', component: EditGpAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpAddressesRoutingModule { }
