import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubjec = new BehaviorSubject<boolean>(this.isLoggedIn());
  
  constructor(private http: HttpClient) {}

  // Generamos el token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  // Iniciamos sesion y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    this.loginStatusSubjec.next(true); // Emitir cambio de estado a true (logueado)
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    return tokenStr !== undefined && tokenStr !== '' && tokenStr !== null;
  }

  // Cerramos sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginStatusSubjec.next(false); // Emitir cambio de estado a false (no logueado)
  }

  // Obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    return userStr != null ? JSON.parse(userStr) : null;
  }

  public getUserRole() {
    let user = this.getUser();
    return user ? user.authorities[0].authority : '';
  }

  public getUserId() {
    let user = this.getUser();
    return user? user.id : null;
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/actual-usuario`);
  }
/*
  // Verificar si el usuario es cliente
  public isCliente(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${baseUrl}/es-cliente/${username}`);
  }
    */
}
