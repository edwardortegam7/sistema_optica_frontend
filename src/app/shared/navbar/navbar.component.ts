import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string = '';
  user: any = null;
  opened = true; // Controla el estado del mat-sidenav

  constructor(public login: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.userRole = this.login.getUserRole();
    
    // Inicialización de opened basado en isLoggedIn
    
    // Suscripción al cambio de estado de login
    this.login.loginStatusSubjec.asObservable().subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
        this.user = this.login.getUser();
        this.userRole = this.login.getUserRole();
        // Actualización de opened basado en isLoggedIn
      }
    );
  }

  public logout() {
    this.login.logout();
    //window.location.reload(); // Recargar la página al cerrar sesión
    this.router.navigate(['']);
  }
}
