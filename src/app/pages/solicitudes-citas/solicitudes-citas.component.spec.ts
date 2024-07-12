import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesCitasComponent } from './solicitudes-citas.component';

describe('SolicitudesCitasComponent', () => {
  let component: SolicitudesCitasComponent;
  let fixture: ComponentFixture<SolicitudesCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
