import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GpEmployeeFormService {

  constructor(private fb: FormBuilder) {
  }

  geGpEmployeeForm() {
    return this.fb.group({
      id: ['',],
      fileNumber: ['', [Validators.compose([Validators.max(5), Validators.required])]],
      firstname: ['', [Validators.compose([Validators.required])]],
      lastname: ['', [Validators.compose([Validators.required])]],
    })
  }
}
