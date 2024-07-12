import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baseUrl}/usuarios/`, user);
  }

  public getCredentials(employee:any) {
    return this.httpClient.post(`${baseUrl}/login`, employee);
  }

  public getEmployees(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/usuarios/get-employees`);
  }
}
