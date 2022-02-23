import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpEmployeeComponent } from '../gp-employee/gp-employee/gp-employee.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'addresses',
        loadChildren: () =>
          import('../gp-addresses/gp-addresses.module').then(
            (m) => m.GpAddressesModule
          ),
      },
      {
        path: 'organisations',
        loadChildren: () =>
          import('../gp-organisations/gp-organisations.module').then(
            (m) => m.GpOrganisationsModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../gp-projects/gp-projects.module').then(
            (m) => m.GpProjectsModule
          ),
      },
      {
        path: 'phases',
        loadChildren: () =>
          import('../gp-phases/gp-phases.module').then((m) => m.GpPhasesModule),
      },
      {
        path: 'phases',
        loadChildren: () =>
          import('../gp-phases/gp-phases.module').then((m) => m.GpPhasesModule),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('../gp-employees/gp-employees.module').then(
            (m) => m.GpEmployeesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
