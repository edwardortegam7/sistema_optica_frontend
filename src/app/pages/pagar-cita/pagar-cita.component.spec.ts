import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagarCitaComponent } from './pagar-cita.component';

describe('PagarCitaComponent', () => {
  let component: PagarCitaComponent;
  let fixture: ComponentFixture<PagarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagarCitaComponent]
      // Puedes añadir más configuraciones aquí como imports de módulos o providers necesarios
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Otras pruebas pueden añadirse según las funcionalidades específicas del componente
});

