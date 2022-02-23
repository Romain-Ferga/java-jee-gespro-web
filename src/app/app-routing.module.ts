import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGpOrganisationComponent } from './views/edit-gp-organisation/edit-gp-organisation.component';
import { GpEmployeeComponent } from './views/gp-employee/gp-employee/gp-employee.component';
import { GpOrganisationsComponent } from './views/gp-organisations/gp-organisations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
