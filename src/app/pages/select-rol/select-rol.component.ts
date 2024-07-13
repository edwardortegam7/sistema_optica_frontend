import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrl: './select-rol.component.css',
})
export class SelectRolComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    nombres: '',
    apellidos: '',
    dni: '',
    genero: '',
    telefono: '',
    direccion: '',
    fecha_nacimiento: '',
  };

  public nombreRol: string = '';

  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (!this.user.nombres) {
      this.snack.open('Los nombres son requeridos!!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    if (!this.user.apellidos) {
      this.snack.open('Los apellidos son requeridos!!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    if (!this.user.telefono) {
      this.snack.open('El teléfono es requerido!!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    if (!this.isValidPhoneNumber(this.user.telefono)) {
      this.snack.open(
        'El teléfono debe tener exactamente 9 dígitos.',
        'Aceptar',
        {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        }
      );
      return;
    }

    if (!this.isValidDNI(this.user.dni)) {
      this.snack.open('El DNI debe tener exactamente 8 dígitos.', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    this.userService
      .checkEmailAvailable(this.formatUsername())
      .subscribe((isAvailable) => {
        let email = this.formatUsername();
        let counter = 1;

        while (!isAvailable) {
          email = `${this.formatUsername()}${counter++}@opticayara.com`;
          this.userService.checkEmailAvailable(email).subscribe((available) => {
            isAvailable = available;
          });
        }

        let password = this.formatPassword();
        this.user.username = email;
        this.user.password = password;
        
        this.userService.añadirUsuario(this.nombreRol,this.user).subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              'Usuario guardado',
              `Email: ${this.user.username} Contraseña: ${this.user.password}`,
              'success'
            );
            this.router.navigate(['']);
          },
          (error) => {
            console.log(error);
            this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar', {
              duration: 3000,
            });
          }
        );
      });
  }

  isValidPhoneNumber(phone: string): boolean {
    return /^\d{9}$/.test(phone); // Verifica que el teléfono tenga exactamente 9 dígitos
  }

  isValidDNI(dni: string): boolean {
    return /^\d{8}$/.test(dni); // Verifica que el DNI tenga exactamente 8 dígitos
  }

  onClick(nombreRol: string): void {
    this.nombreRol = nombreRol;
  }

  formatUsername(): string {
    const name = this.user.nombres.split(' ')[0].toLocaleLowerCase();
    const surname = this.user.apellidos.split(' ')[0].toLowerCase();
    return name + '.' + surname + '@opticayara.com';
  }

  formatPassword(): string {
    const surname = this.user.apellidos.split(' ')[0].toLowerCase();
    return this.user.dni + surname;
  }
}
