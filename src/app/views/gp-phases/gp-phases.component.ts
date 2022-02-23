import { GpPhase } from './../../models/gp-phase';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GpPhaseService } from 'src/app/services/gp-phase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GpProject } from 'src/app/models/gp-project';
import { GpProjectService } from 'src/app/services/gp-project.service';

@Component({
  selector: 'app-gp-phases',
  templateUrl: './gp-phases.component.html',
  styleUrls: ['./gp-phases.component.scss'],
})
export class GpPhasesComponent implements OnInit {
  phaseForm!: FormGroup;
  phase!: GpPhase;
  idPhase!: number;
  project!: GpProject;
  idProject!: number;
  listPhases?: GpPhase[];
  constructor(
    private phaseServices: GpPhaseService,
    private router: Router,
    private projectServices: GpProjectService,
    private route: ActivatedRoute
  ) {
    this.idProject = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPhases();
    this.populateForm();
  }

  getPhases() {
    this.phaseServices.getAll().subscribe(
      (res) => {
        this.listPhases = res;
        console.log(this.listPhases);
      },
      (err) => {
        console.log('ERROR GET listPhases....', err.error.message);
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['/phases/', id]);
  }

  delete(id: any) {
    this.phaseServices.delete(id).subscribe((res) => {
      this.getPhases();
    });
  }
  populateForm() {
    if (this.idProject) {
      this.projectServices.getByid(this.idProject).subscribe((res) => {
        this.project = res;
        this.listPhases = this.project.gpPhases;
      });
    }
  }

  addphase() {
    this.router.navigate(['/phases/nouveau']);
  }
}
