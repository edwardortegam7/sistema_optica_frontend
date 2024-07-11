import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrl: './solicitar-cita.component.css'
})
export class SolicitarCitaComponent implements OnInit {

  citaForm: FormGroup;

  constructor() {
    this.citaForm = new FormGroup({
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      servicio: new FormControl('', Validators.required),
      observaciones: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Procesar la solicitud de cita
    // Enviar los datos del formulario al servidor
    console.log('Datos del formulario:', this.citaForm.value);
  }
}
