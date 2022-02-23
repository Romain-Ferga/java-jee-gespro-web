import { GpPhase } from './../../models/gp-phase';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GpPhaseService } from 'src/app/services/gp-phase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gp-phases',
  templateUrl: './gp-phases.component.html',
  styleUrls: ['./gp-phases.component.scss'],
})
export class GpPhasesComponent implements OnInit {
  phaseForm!: FormGroup;
  phase!: GpPhase;
  idPhase!: number;
  listPhases!: GpPhase[];
  constructor(private phaseServices: GpPhaseService, private router: Router) {}

  ngOnInit(): void {
    this.getPhases();
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
}
