import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGpPhaseComponent } from '../edit-gp-phase/edit-gp-phase.component';
import { GpPhasesComponent } from './gp-phases.component';

const routes: Routes = [
  { path: '', component: GpPhasesComponent },
  { path: 'nouveau', component: EditGpPhaseComponent },
  { path: ':id', component: EditGpPhaseComponent },
  { path: 'project/:id', component: GpPhasesComponent },
  { path: 'project/nouveau/:idproject', component: EditGpPhaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpPhasesRoutingModule {}
