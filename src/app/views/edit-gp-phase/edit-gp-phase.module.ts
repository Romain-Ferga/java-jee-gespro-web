import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditGpPhaseRoutingModule } from './edit-gp-phase-routing.module';
import { EditGpPhaseComponent } from './edit-gp-phase.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditGpPhaseComponent],
  imports: [
    CommonModule,
    EditGpPhaseRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditGpPhaseModule { }
