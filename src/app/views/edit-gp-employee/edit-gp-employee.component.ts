import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GpEmployeeFormService } from 'src/app/forms/gp-employee-form.service';
import { GpEmployee } from 'src/app/models/gp-employee';
import { GpEmployeeService } from 'src/app/services/gp-employee.service';

@Component({
  selector: 'app-edit-gp-employee',
  templateUrl: './edit-gp-employee.component.html',
  styleUrls: ['./edit-gp-employee.component.scss']
})
export class EditGpEmployeeComponent implements OnInit {

  empForm !: FormGroup;
  employe!: GpEmployee;
  idEmp !: number;

  constructor(
    private gpEmpFormService: GpEmployeeFormService,
    private gpEmpService: GpEmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.empForm = this.gpEmpFormService.gpEmployeeForm();
    this.idEmp = this.route.snapshot.params.id;
    console.log("ID PARAM.....", this.idEmp);
  }

  ngOnInit(): void {
    this.populateForm();
  }
  populateForm() {
    if (this.idEmp) {
      this.gpEmpService.getByid(this.idEmp).subscribe(
        (res) => {
          this.employe = res;
          this.empForm.patchValue(this.employe);
          console.log("UPDATE....", this.employe);
        }
      );
    }
  }

  save() {
    console.log(this.empForm.value);
    if (this.idEmp) {
      this.gpEmpService.update(this.empForm.value, this.idEmp).subscribe(
        (res) => {
          this.router.navigate(['/employees']);
          console.log("UPDATED....", res);
        }
      );
    } else {
      this.gpEmpService.create(this.empForm.value).subscribe(
        (res) => {
          this.router.navigate(['/employees']);
          console.log("CREATED....", res);
        }
      );
    }
  }

}
