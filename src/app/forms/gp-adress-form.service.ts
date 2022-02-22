import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GpAdressFormService {

  constructor(private fb: FormBuilder) {
  }

  adressForm() {
    return this.fb.group({
      id: ['',],
      streetNumber: ['', [Validators.compose([Validators.max(5), Validators.required])]],
      streetLabel: ['', [Validators.compose([Validators.required])]],
      zipCode: ['', [Validators.compose([Validators.required])]],
      country: ['', [Validators.compose([Validators.required])]],
      isMain: ['', [Validators.compose([Validators.required])]],
      gpOrganization: [,Validators.required],
      gpEmployee: [,],
    })
  }
}