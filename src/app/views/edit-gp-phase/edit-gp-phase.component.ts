import { GpPhase } from './../../models/gp-phase';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GpProject } from 'src/app/models/gp-project';
import { GpPhasesFormService } from 'src/app/forms/gp-phases-form.service';
import { GpProjectService } from 'src/app/services/gp-project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GpPhaseService } from 'src/app/services/gp-phase.service';

@Component({
  selector: 'app-edit-gp-phase',
  templateUrl: './edit-gp-phase.component.html',
  styleUrls: ['./edit-gp-phase.component.scss'],
})
export class EditGpPhaseComponent implements OnInit {
  phaseForm: FormGroup | any;
  phase!: GpPhase;
  idPhase!: number;
  listProject!: GpProject[];
  boolList: any[] = [];
  constructor(
    private phaseFormService: GpPhasesFormService,
    private projectServices: GpProjectService,
    private phaseServices: GpPhaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.phaseForm = this.phaseFormService.getPhasesForm();
    this.idPhase = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.populateForm();
    this.getAllProjets();
    this.boolList = [
      {
        label: 'Oui',
        value: 1,
      },
      {
        label: 'Non',
        value: 0,
      },
    ];
  }
  getAllProjets() {
    this.projectServices.getAll().subscribe(
      (res) => {
        this.listProject = res;
        console.log('+++++', this.listProject);
      },
      (error) => {}
    );
  }
  populateForm() {
    if (this.idPhase) {
      this.phaseServices.getByid(this.idPhase).subscribe((res) => {
        this.phase = res;
        this.phaseForm.patchValue(this.phase);
      });
    }
  }
  onSavePhase(phase: GpPhase) {
    console.log('phase :' + phase);
    this.phaseServices.create(phase).subscribe((res: GpProject) => {
      console.log('phase ' + res.name + ' created');
      this.router.navigate(['/phases/']);
    });
  }
  get f() {
    return this.phaseForm.controls;
  }
}
