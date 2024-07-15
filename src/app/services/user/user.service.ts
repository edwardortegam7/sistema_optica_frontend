import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public añadirUsuario(nombreRol: string, user: any) {
    return this.httpClient.post(`${baseUrl}/usuarios/${nombreRol}`, user);
  }

  public getCredentials(employee: any) {
    return this.httpClient.post(`${baseUrl}/login`, employee);
  }

  public getEmployees(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/usuarios/get-employees`);
  }

  public getSolicitudesCitas() {
    return this.httpClient.get(`${baseUrl}/usuarios/lista-solicitudes`);
  }

  public getSolicitud(id: number) {
    return this.httpClient.get(`${baseUrl}/usuarios/solicitud/${id}`);
  }

  public checkEmailAvailable(username: string) {
    return this.httpClient.get<boolean>(
      `${baseUrl}/usuarios/check-email?username=${username}`
    );
  }

  public getCliente(id: number) {
    return this.httpClient.get(`${baseUrl}/usuarios/get/${id}`);
  }

  public getDoctores() {
    return this.httpClient.get(`${baseUrl}/usuarios/doctores`);
  }

  public asignarCitaDoctor(idCita: number, idEmpleado: number) {
    return this.httpClient.put(
      `${baseUrl}/usuarios/asignar-cita/${idCita}?idEmployee=${idEmpleado}`,
      {}
    );
  }

  public getCitasAsignadas(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/usuarios/citas-asignadas`);
  }
}
