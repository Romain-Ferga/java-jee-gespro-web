import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGpOrganisationComponent } from '../edit-gp-organisation/edit-gp-organisation.component';
import { GpOrganisationsComponent } from './gp-organisations.component';

const routes: Routes = [

  { path: '', component: GpOrganisationsComponent, },
  { path: 'nouveau', component: EditGpOrganisationComponent },
  { path: ':id', component: EditGpOrganisationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpOrganisationsRoutingModule { }
