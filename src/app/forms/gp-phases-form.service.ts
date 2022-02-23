import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class GpPhasesFormService {
  constructor(private fb: FormBuilder) {}
  getPhasesForm() {
    return this.fb.group({
      id: '',
      isEnded: [''],
      phaseCode: [''],
      startDate: [''],
      status: [''],
      updateDate: [''],
      amount: [''],
      creationDate: [''],
      description: [''],
      endDate: [''],
      gpBills: [],
      gpProject: [],
    });
  }
}
