import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GpEmployeeFormService } from 'src/app/forms/gp-employee-form.service';
import { GpEmployee } from 'src/app/models/gp-employee';
import { GpEmployeeService } from 'src/app/services/gp-employee.service';

@Component({
  selector: 'app-gp-employees',
  templateUrl: './gp-employees.component.html',
  styleUrls: ['./gp-employees.component.scss']
})
export class GpEmployeesComponent implements OnInit {


  employee !: GpEmployee;
  employeeList !: GpEmployee[];

  constructor(
    private gpEmpFormService: GpEmployeeFormService,
    private gpEmployeeService: GpEmployeeService,
    private router: Router,
    ) {
  }

  

  ngOnInit(): void {
    this.getAllEmployees();
  }


  edit(id : any) {
    this.router.navigate(['/employees/', id])
  }

  delete(id: any) {
    this.gpEmployeeService.delete(id).subscribe(
      () => {
        this.getAllEmployees();
      }
    )
  }
  getAllEmployees() {
    this.gpEmployeeService.getAll().subscribe(
      (res) => {
        this.employeeList = res;
        console.log('+++++', this.employeeList);
      },
      (error) => {
      }
    )
  }

  register(employeeForm: FormGroup) {
    console.log('++++++++++', employeeForm.value);
  }
}
