import { Component, OnInit } from '@angular/core';
import { GpProjectManager } from 'src/app/models/gp-project-manager';
import { GpProjectmanagerService } from 'src/app/services/gp-projectmanager.service';

@Component({
  selector: 'app-gp-project-managers',
  templateUrl: './gp-project-managers.component.html',
  styleUrls: ['./gp-project-managers.component.scss'],
})
export class GpProjectManagersComponent implements OnInit {
  projectManagers: GpProjectManager[] = [];
  constructor(private projectmanagerService: GpProjectmanagerService) {}

  ngOnInit(): void {
    this.getAllProjectManager();
  }
  getAllProjectManager() {
    this.projectmanagerService.getAll().subscribe((response) => {
      this.projectManagers = response;
      console.log(this.projectManagers);
    });
  }
}
