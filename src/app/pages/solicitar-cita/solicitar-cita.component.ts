import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrl: './solicitar-cita.component.css',
})
export class SolicitarCitaComponent implements OnInit {
  citaForm: FormGroup;

  constructor(
    private login: LoginService,
    private client: ClientService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.citaForm = new FormGroup({
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      servicio: new FormControl('', Validators.required),
      observacion: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const timeString = this.citaForm.get('hora')?.value as string;
    const userId = this.login.getUserId();

    const formattedTime = this.formatTimeToHHmmss(timeString);
    const formData = this.citaForm.value;

    formData.hora = formattedTime;
    if (this.citaForm.invalid) {
      console.error('Form is invalid. Please fill in all required fields.');
      this.snackBar.open(
        'Formulario incompleto. Por favor, complete todos los campos obligatorios.',
        'Cerrar',
        {
          duration: 3000,
        }
      );
      return;
    }

    this.client.solicitarCita(userId, formData).subscribe((data) => {
      console.log(data);
      Swal.fire('Éxito', 'Cita solicitada exitosamente!', 'success');
      this.router.navigate(['']);
    },
    (error) => {
      console.log(error);
        this.snackBar.open('Ha ocurrido un error en el sistema', 'Aceptar', {
          duration: 3000,
        });
    });
  }

  private formatTimeToHHmmss(timeString: string): string {
    // Create a Date object from the time string
    const time = new Date(`1970-01-01T${timeString}:00`);

    // Extract hours, minutes, and seconds
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    // Format the time as HH:mm:ss
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  }
}
