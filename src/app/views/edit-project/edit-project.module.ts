import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProjectRoutingModule } from './edit-project-routing.module';
import { EditProjectComponent } from './edit-project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProjectComponent],
  imports: [CommonModule, EditProjectRoutingModule, ReactiveFormsModule],
})
export class EditProjectModule {}
