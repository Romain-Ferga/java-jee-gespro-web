import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GpOrganization } from 'src/app/models/gp-organization';
import { GpOrganisationService } from 'src/app/services/gp-organisation.service';

@Component({
  selector: 'app-gp-organisations',
  templateUrl: './gp-organisations.component.html',
  styleUrls: ['./gp-organisations.component.scss'],
})
export class GpOrganisationsComponent implements OnInit {
  gpOrganisations: GpOrganization[] = [];
  gpOrganisation!: GpOrganization;

  constructor(
    private organisationService: GpOrganisationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrganisations();
  }

  getOrganisationById(id: number) {
    this.organisationService.getByid(id).subscribe(
      (res) => {
        this.gpOrganisation = res;
        console.log(this.gpOrganisation);
      },
      (err) => {
        console.log('ERROR GET ONE ORGGANISATION...', err.error.message);
      }
    );
  }

  getOrganisations() {
    this.organisationService.getAll().subscribe(
      (res) => {
        this.gpOrganisations = res;
        console.log(this.gpOrganisations);
      },
      (err) => {
        console.log('ERROR GET ORGGANISATIONES....', err.error.message);
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['/admin/organisations/', id]);
  }

  delete(id: any) {
    this.organisationService.delete(id).subscribe((res) => {
      this.getOrganisations();
    });
  }
}
