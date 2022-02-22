import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { GpProjectsComponent } from './gp-projects.component';

const routes: Routes = [
  { path: '', component: GpProjectsComponent },
  { path: 'nouveau', component: EditProjectComponent },
  { path: ':id', component: EditProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpProjectsRoutingModule {}
