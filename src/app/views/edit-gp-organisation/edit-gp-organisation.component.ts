import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GpOrganisationFormService } from 'src/app/forms/gp-organisation-form.service';
import { GpOrganization } from 'src/app/models/gp-organization';
import { GpOrganisationService } from 'src/app/services/gp-organisation.service';

@Component({
  selector: 'app-edit-gp-organisation',
  templateUrl: './edit-gp-organisation.component.html',
  styleUrls: ['./edit-gp-organisation.component.scss'],
})
export class EditGpOrganisationComponent implements OnInit {
  organisationForm!: FormGroup;
  organisation!: GpOrganization;
  idOrg!: number;

  constructor(
    private gpOrgFormService: GpOrganisationFormService,
    private gpOrgService: GpOrganisationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.organisationForm = this.gpOrgFormService.getOrganisationForm();
    this.idOrg = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.populateForm();
    console.log('idOrg', this.idOrg);
  }

  populateForm() {
    if (this.idOrg) {
      this.gpOrgService.getByid(this.idOrg).subscribe((response) => {
        this.organisation = response;
        this.organisationForm.patchValue(this.organisation);
      });
    }
  }

  save() {
    if (this.idOrg) {
      this.gpOrgService
        .update(this.organisationForm.value, this.idOrg)
        .subscribe((res) => {
          this.router.navigate(['/admin/organisations/']);
          console.log('UPDATE..........', res);
        });
    } else {
      this.gpOrgService.create(this.organisationForm.value).subscribe((res) => {
        this.router.navigate(['/admin/organisations/']);
        console.log(res);
      });
    }
  }
}
