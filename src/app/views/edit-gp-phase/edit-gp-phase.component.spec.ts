import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGpPhaseComponent } from './edit-gp-phase.component';

describe('EditGpPhaseComponent', () => {
  let component: EditGpPhaseComponent;
  let fixture: ComponentFixture<EditGpPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGpPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGpPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
