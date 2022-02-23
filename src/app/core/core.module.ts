import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GpEmployeeModule } from '../views/gp-employee/gp-employee.module';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { GpAddressesModule } from '../views/gp-addresses/gp-addresses.module';
import { EditGpAddressModule } from '../views/edit-gp-address/edit-gp-address.module';
import { EditGpOrganisationModule } from '../views/edit-gp-organisation/edit-gp-organisation.module';
import { GpOrganisationsModule } from '../views/gp-organisations/gp-organisations.module';
import { GpPhasesModule } from '../views/gp-phases/gp-phases.module';
import { EditGpEmployeeModule } from '../views/edit-gp-employee/edit-gp-employee.module';
import { GpEmployeesModule } from '../views/gp-employees/gp-employees.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GpEmployeeModule,
    HttpClientModule,
    RouterModule,
    GpAddressesModule,
    EditGpAddressModule,
    EditGpOrganisationModule,
    GpOrganisationsModule,
    GpPhasesModule,
    GpEmployeesModule,
    EditGpEmployeeModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
