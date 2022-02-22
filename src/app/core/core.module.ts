import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GpEmployeeModule } from '../views/gp-employee/gp-employee.module';
import { HttpClientModule } from '@angular/common/http';
import { GpAddressesComponent } from '../views/gp-addresses/gp-addresses.component';
import { EditGpAddressComponent } from '../views/edit-gp-address/edit-gp-address.component';
import { EditGpOrganisationComponent } from '../views/edit-gp-organisation/edit-gp-organisation.component';
import { GpOrganisationsComponent } from '../views/gp-organisations/gp-organisations.component';
import { RouterModule } from '@angular/router';
import { GpAddressesModule } from '../views/gp-addresses/gp-addresses.module';
import { EditGpAddressRoutingModule } from '../views/edit-gp-address/edit-gp-address-routing.module';
import { EditGpAddressModule } from '../views/edit-gp-address/edit-gp-address.module';
import { EditGpOrganisationModule } from '../views/edit-gp-organisation/edit-gp-organisation.module';
import { GpOrganisationsModule } from '../views/gp-organisations/gp-organisations.module';
import { GpProjectsRoutingModule } from '../views/gp-projects/gp-projects-routing.module';
import { EditProjectModule } from '../views/edit-project/edit-project.module';
@NgModule({
  declarations: [],
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
    GpProjectsRoutingModule,
    EditProjectModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
