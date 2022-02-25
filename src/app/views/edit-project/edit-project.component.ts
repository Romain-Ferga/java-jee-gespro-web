import {GpOrganisationService} from './../../services/gp-organisation.service';
import {GpProjectService} from 'src/app/services/gp-project.service';
import {GpProject} from './../../models/gp-project';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GpProjectManager} from 'src/app/models/gp-project-manager';
import {GpOrganization} from 'src/app/models/gp-organization';
import {GpProjectFormService} from 'src/app/forms/gp-project-form.service';
import {GpProjectmanagerService} from 'src/app/services/gp-projectmanager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  projectForm: FormGroup | any;
  project!: GpProject;
  idProject!: number;
  gpProjectManager!: GpProjectManager;
  organization!: GpOrganization;
  gpChefProjets: GpProjectManager[] = [];
  gpOrganizations: GpOrganization[] = [];

  constructor(
    private projectFormService: GpProjectFormService,
    private projectServices: GpProjectService,
    private organisationService: GpOrganisationService,
    private pManagerService: GpProjectmanagerService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.projectForm = this.projectFormService.getGpProjectForm();
    this.idProject = this.route.snapshot.params.id;
  }

  get f() {
    return this.projectForm.controls;
  }

  ngOnInit(): void {

    this.alertService.success('Hello world!', 'Toastr fun!');

    this.populateForm();
    this.getAllChefProjets();
    this.getAllOrganisation();
  }

  getAllChefProjets() {
    this.pManagerService.getAll().subscribe(
      (res) => {
        this.gpChefProjets = res;
      },
      (error) => {
      }
    );
  }

  getAllOrganisation() {
    this.organisationService.getAll().subscribe(
      (res) => {
        this.gpOrganizations = res;
      },
      (error) => {
      }
    );
  }

  populateForm() {
    if (this.idProject) {
      this.projectServices.getByid(this.idProject).subscribe((res) => {
        this.project = res;
        this.projectForm.patchValue(this.project);
      });
    }
  }

  onSaveProject(project: GpProject) {
    this.projectServices.create(project).subscribe((res: GpProject) => {
      this.alertService.success(`Création de l'item: ${res.projectCode} `, 'Success');
      this.router.navigate(['/admin/projects/']);
    });
  }
}
