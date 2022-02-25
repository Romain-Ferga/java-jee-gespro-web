import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GpProjectsRoutingModule} from './gp-projects-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {GpProjectsComponent} from './gp-projects.component';

@NgModule({
  declarations: [GpProjectsComponent],
  imports: [CommonModule, GpProjectsRoutingModule, ReactiveFormsModule],
})
export class GpProjectsModule {
}
