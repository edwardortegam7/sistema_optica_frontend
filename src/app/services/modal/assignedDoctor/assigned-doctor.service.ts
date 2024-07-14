import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignedDoctorService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
