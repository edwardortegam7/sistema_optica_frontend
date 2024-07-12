import { Component } from '@angular/core';
import { PagoService } from '../services/pago.service';

@Component({
  selector: 'app-pagar-cita',
  templateUrl: './pagar-cita.component.html',
  styleUrls: ['./pagar-cita.component.css']
})
export class PagarCitaComponent {
  montoAPagar: number = 0; // Puedes inicializarlo con el monto a pagar obtenido del sistema
  nombreTitular: string = '';
  numeroTarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';
  correo: string = '';

  constructor(private pagoService: PagoService) {}

  pagarCita() {
    const datosPago = {
      monto: this.montoAPagar,
      nombreTitular: this.nombreTitular,
      numeroTarjeta: this.numeroTarjeta,
      fechaExpiracion: this.fechaExpiracion,
      cvv: this.cvv,
      correo: this.correo
    };

    this.pagoService.realizarPago(datosPago).subscribe(
      respuesta => {
        alert('Pago realizado con éxito');
        // Mostrar mensaje de éxito y manejar acciones adicionales según sea necesario
      },
      error => {
        alert('Error al realizar el pago');
        // Mostrar mensaje de error y manejar acciones adicionales según sea necesario
      }
    );
  }
}

