import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignedDoctorService {

  constructor() { }

  $modal = new EventEmitter<boolean>();
  private solicitud: any;

  setSolicitud(solicitud: any) {
    this.solicitud = solicitud;
  }

  getSolicitud() {
    return this.solicitud;
  }
}
