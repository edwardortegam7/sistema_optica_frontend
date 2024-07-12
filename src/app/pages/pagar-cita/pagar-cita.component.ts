import { Component } from '@angular/core';
import { PagoService } from '../services/pago.service';

@Component({
  selector: 'app-pagar-cita',
  templateUrl: './pagar-cita.component.html',
  styleUrls: ['./pagar-cita.component.css']
})
export class PagarCitaComponent {
  montoAPagar: number = 0; 
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
        
      },
      error => {
        alert('Error al realizar el pago');
        
      }
    );
  }
}

