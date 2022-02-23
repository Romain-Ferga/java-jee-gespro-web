import { Component, OnInit } from '@angular/core';
import { GpEmployeeFormService } from "../../../forms/gp-employee-form.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GpEmployee } from "../../../models/gp-employee";
import { GpEmployeeService } from "../../../services/gp-employee.service";

@Component({
  selector: 'app-gp-employee',
  templateUrl: './gp-employee.component.html',
  styleUrls: ['./gp-employee.component.scss']
})
export class GpEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employee!: GpEmployee;
  employeeList: GpEmployee[] = [];

  constructor(private gpEmpFormService: GpEmployeeFormService,
    private gpEmployeeService: GpEmployeeService,
    private fb: FormBuilder) {
    this.fb.group({
      id: ['',],
      creationDate: [new Date()],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      fileNumber: ['', Validators.required],
      firstname: ['', [Validators.compose([Validators.required])]],
      lastname: ['',],
      login: ['', [Validators.compose([Validators.required])]],
      password: ['', [Validators.compose([Validators.required])]],
      phoneNumber: ['',],
      updateDate: ['',],
      gpAddresses: ['',],
    })
  }

  get f() {
    return this.employeeForm.controls;
  }

  ngOnInit(): void {
    this.employeeForm = this.gpEmpFormService.gpEmployeeForm();
    this.getAllEmployees();
    this.getEmployeeById();
    this.gpEmployeeService.delete(150).subscribe(
      res => {

      },
      error => {
        console.log("error+++", error.error.message);
      }
    );
  }

  getEmployeeById() {
    this.gpEmployeeService.getByid(150).subscribe(
      (res) => {
        this.employee = res;
        console.log('-------', this.employee);
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
