import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GpAdressFormService } from 'src/app/forms/gp-adress-form.service';
import { GpAddress } from 'src/app/models/gp-address';
import { GpEmployee } from 'src/app/models/gp-employee';
import { GpOrganization } from 'src/app/models/gp-organization';
import { GpAddressService } from 'src/app/services/gp-address.service';
import { GpEmployeeService } from 'src/app/services/gp-employee.service';
import { GpOrganisationService } from 'src/app/services/gp-organisation.service';

@Component({
  selector: 'app-edit-gp-address',
  templateUrl: './edit-gp-address.component.html',
  styleUrls: ['./edit-gp-address.component.scss'],
})
export class EditGpAddressComponent implements OnInit {
  addrForm!: FormGroup;
  address!: GpAddress;
  idAddr!: number;
  listOrganisations!: GpOrganization[];
  listEmployees!: GpEmployee[];
  constructor(
    private gpAddrFormService: GpAdressFormService,
    private gpAddrService: GpAddressService,
    private gpOrgService: GpOrganisationService,
    private route: ActivatedRoute,
    private router: Router,
    private gpEmpService: GpEmployeeService
  ) {
    this.addrForm = this.gpAddrFormService.adressForm();
    this.idAddr = this.route.snapshot.params.id;
    console.log('ID PARAM....', this.idAddr);
  }

  ngOnInit(): void {
    this.populateForm();
    this.gpOrgService.getAll().subscribe((res) => {
      this.listOrganisations = res;
      console.log('ORG LIST...', res);
    });
    this.gpEmpService.getAll().subscribe((res) => {
      this.listEmployees = res;
      console.log('EMP LIST...', res);
    });
  }

  populateForm() {
    if (this.idAddr) {
      this.gpAddrService.getByid(this.idAddr).subscribe((res) => {
        this.address = res;
        this.addrForm.patchValue(this.address);
        console.log('UPDATE....', this.address);
      });
    }
  }

  save() {
    console.log(this.addrForm.value);
    if (this.idAddr) {
      this.gpAddrService
        .update(this.addrForm.value, this.idAddr)
        .subscribe((res) => {
          this.router.navigate(['/admin/addresses/']);
          console.log('UPDATED....', res);
        });
    } else {
      this.gpAddrService.create(this.addrForm.value).subscribe((res) => {
        this.router.navigate(['/admin/addresses/']);
        console.log('CREATED....', res);
      });
    }
  }
}
