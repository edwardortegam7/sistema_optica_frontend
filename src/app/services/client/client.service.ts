import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public añadirCliente(user:any) {
    return this.httpClient.post(`${baseUrl}/clientes/`, user);
  }

  public solicitarCita(clienteId: number, cita: any) {
    return this.httpClient.post(`${baseUrl}/clientes/guardar-cita/${clienteId}`, cita);
  }

  public realizarPago(clienteId: number, datosPago: any) {
    
  }
  
}
