import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GpEmployeeComponent} from './gp-employee.component';

describe('GpEmployeeComponent', () => {
  let component: GpEmployeeComponent;
  let fixture: ComponentFixture<GpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpEmployeeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
