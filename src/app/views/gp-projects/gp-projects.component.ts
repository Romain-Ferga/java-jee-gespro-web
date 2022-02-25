import {GpProject} from './../../models/gp-project';
import {Component, OnInit} from '@angular/core';
import {GpProjectService} from 'src/app/services/gp-project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gp-projects',
  templateUrl: './gp-projects.component.html',
  styleUrls: ['./gp-projects.component.scss'],
})
export class GpProjectsComponent implements OnInit {
  projects: GpProject[] = [];

  constructor(
    private projectService: GpProjectService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAll().subscribe((response) => {
      this.projects = response;
      console.log(this.projects);
    });
  }

  edit(id: any) {
    this.router.navigate(['/admin/projects/', id]);
  }

  delete(id: any) {
    this.projectService.delete(id).subscribe((res) => {
      this.getAllProjects();
    });
  }

  projectPhase(id: any) {
    this.router.navigate(['/admin/phases/project/', id]);
  }
}
