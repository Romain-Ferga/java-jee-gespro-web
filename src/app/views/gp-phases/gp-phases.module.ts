import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpPhasesRoutingModule } from './gp-phases-routing.module';
import { GpPhasesComponent } from './gp-phases.component';


@NgModule({
  declarations: [GpPhasesComponent],
  imports: [
    CommonModule,
    GpPhasesRoutingModule
  ]
})
export class GpPhasesModule { }
