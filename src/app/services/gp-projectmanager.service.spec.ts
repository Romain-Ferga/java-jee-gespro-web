import {TestBed} from '@angular/core/testing';

import {GpProjectmanagerService} from './gp-projectmanager.service';

describe('GpProjectmanagerService', () => {
  let service: GpProjectmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpProjectmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
