import { Component, OnInit } from '@angular/core';
import { AssignedDoctorService } from '../../services/modal/assignedDoctor/assigned-doctor.service';
import { UserService } from '../../services/user/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assigned-doctor',
  templateUrl: './assigned-doctor.component.html',
  styleUrl: './assigned-doctor.component.css',
})
export class AssignedDoctorComponent implements OnInit {
  info: any;
  cita: any;
  user: any;
  doctores: any;
  selectedDoctorId: any | null = null;

  constructor(
    private modal: AssignedDoctorService,
    private userService: UserService,
    public loc: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.info = this.modal.getSolicitud();
    this.userService.getSolicitud(this.info[8]).subscribe((data) => {
      this.cita = data;
    });
    // agregar validaciones para la cita
    // Por ejemplo, verificar que la solicitud no haya expirado, que el paciente esté aceptado, etc.

    // Puedes usar este objeto 'cita' para mostrar los detalles de la cita y realizar las acciones necesarias.

    // Por ejemplo, enviar un correo al paciente con la confirmación de la cita, o agregar una notificación en el sistema.

    // También puedes utilizar este objeto 'cita' para realizar cualquier acción necesaria en el sistema, como actualizar el estado de la cita o enviar un mensaje de confirmación al paciente.

    this.userService.getCliente(this.info[7]).subscribe((client) => {
      this.user = client;
    });

    this.userService.getDoctores().subscribe((doctors) => {
      this.doctores = doctors;
    });
  }

  closeModal(): void {
    this.modal.$modal.emit(false);
  }

  asignarCitaDoctor(): void {
    this.userService
      .asignarCitaDoctor(this.cita.id, this.selectedDoctorId)
      .subscribe(() => {
        Swal.fire(
          'Doctor asignado',
          'Usuario registrado con exito',
          'success'
        );
        this.modal.$modal.emit(false);
        this.router.navigateByUrl("/dashboard", { skipLocationChange: true }).then(() => {
          console.log(decodeURI(this.loc.path()));
          this.router.navigate([decodeURI(this.loc.path())]);
          });
      },
      (error) => {
        console.error('Error al asignar el doctor a la cita:', error);
      });
  }
}
