import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string = '';
  user: any = null;
  opened = false; // Controla el estado del mat-sidenav

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.userRole = this.login.getUserRole();
    
    // Inicialización de opened basado en isLoggedIn
    this.opened = this.isLoggedIn; // Abierto si no está logueado, cerrado si está logueado
    
    // Suscripción al cambio de estado de login
    this.login.loginStatusSubjec.asObservable().subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
        this.user = this.login.getUser();
        this.userRole = this.login.getUserRole();
        // Actualización de opened basado en isLoggedIn
        this.opened = this.isLoggedIn; // Abierto si no está logueado, cerrado si está logueado
      }
    );
  }

  public logout() {
    this.login.logout();
    window.location.reload(); // Recargar la página al cerrar sesión
  }
}







/*import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string = '';
  user: any = null;
  opened = false; // Controla el estado del mat-sidenav

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.userRole = this.login.getUserRole();
    
    // Inicialización de opened basado en isLoggedIn
    this.opened = !this.isLoggedIn; // Abierto si no está logueado, cerrado si está logueado
    
    // Suscripción al cambio de estado de login
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
        this.userRole = this.login.getUserRole();
        // Actualización de opened basado en isLoggedIn
        this.opened = !this.isLoggedIn; // Abierto si no está logueado, cerrado si está logueado
      }
    );
  }
  

  public logout() {
    this.login.logout();
    window.location.reload(); // Recargar la página al cerrar sesión
  }
}
*/