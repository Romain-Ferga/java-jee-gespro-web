import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GpPhase } from '../models/gp-phase';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class GpPhaseService extends CrudService<GpPhase> {
  constructor(httpClient: HttpClient) {
    const url: string = environment.baseUrl;
    super(httpClient, `${url}/phase`);
  }
}
