import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Observable } from 'rxjs';
import { TableInventarioItem } from '../../pages/table-inventario/table-inventario-datasource';
import { TableVentaItem } from '../../pages/table-venta/table-venta-datasource';

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

  public getClientes(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${baseUrl}/clientes/`);
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

  //Inventario

  public getInventario(): Observable<TableInventarioItem[]> {
    return this.httpClient.get<TableInventarioItem[]>(`${baseUrl}/usuarios/inventario`);
  }

  public getInventarioPorId(id:number){
    return this.httpClient.get(`${baseUrl}/usuarios/inventario/${id}`);
  }

  public agregarProducto(producto: any){
    return this.httpClient.post(`${baseUrl}/usuarios/inventario`, producto);
  }

  public modificarProducto(id:number, producto:any){
    return this.httpClient.put(`${baseUrl}/usuarios/inventario/${id}`,producto)
  }

  public eliminarProducto(id:number){
    return this.httpClient.delete(`${baseUrl}/usuarios/inventario/${id}`);
  }

  //Ventas
  public getVentas(): Observable<TableVentaItem[]> {
    return this.httpClient.get<TableVentaItem[]>(`${baseUrl}/usuarios/ventas`);
  }

  public agregarVenta(venta: any){
    return this.httpClient.post(`${baseUrl}/usuarios/ventas`, venta);
  }

}
