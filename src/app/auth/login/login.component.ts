import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('El nombre de usuario es requerido', 'Aceptar', {
        duration: 3000,
      });
      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('La contraseña es requerida', 'Aceptar', {
        duration: 3000,
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          this.router.navigate(['dashboard']);
          this.loginService.loginStatusSubjec.next(true);
/*
          if (this.loginService.getUserRole()) {
            this.router.navigate(['dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          }
            */
        });
      },
      (error) => {
        console.log(error);
        this.snack.open('Detalles invalidos, vuelva a intentar', 'Aceptar', {
          duration: 1000,
        });
      }
    );
  }

  clearForm() {
    this.loginData = {
      username: '',
      password: '',
    };
  }
}
