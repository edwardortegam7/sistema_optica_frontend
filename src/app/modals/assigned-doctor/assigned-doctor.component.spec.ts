import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDoctorComponent } from './assigned-doctor.component';

describe('AssignedDoctorComponent', () => {
  let component: AssignedDoctorComponent;
  let fixture: ComponentFixture<AssignedDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
