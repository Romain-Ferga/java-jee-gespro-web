import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GpPhasesComponent} from './gp-phases.component';

describe('GpPhasesComponent', () => {
  let component: GpPhasesComponent;
  let fixture: ComponentFixture<GpPhasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpPhasesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
