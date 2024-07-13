import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-pagar-cita',
  templateUrl: './pagar-cita.component.html',
  styleUrls: ['./pagar-cita.component.css']
})
export class PagarCitaComponent implements OnInit {
  pagoForm: FormGroup;

  constructor(
    private client: ClientService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.pagoForm = new FormGroup({
      monto: new FormControl('', Validators.required),
      fechaHora: new FormControl('', Validators.required),
      optico: new FormControl('', Validators.required),
      nombreOptica: new FormControl('', Validators.required),
      metodoPago: new FormControl('Tarjeta de debito/credito', Validators.required),
      nombreTitular: new FormControl('', Validators.required),
      numeroTarjeta: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      fechaExpiracion: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.pagoForm.invalid) {
      console.error('Formulario de pago incompleto o inválido.');
      this.snackBar.open(
        'Formulario de pago incompleto o inválido. Por favor, complete todos los campos requeridos correctamente.',
        'Cerrar',
        { duration: 3000 }
      );
      return;
    }

    // Realizar el pago mediante el servicio del cliente
    
  }

}
