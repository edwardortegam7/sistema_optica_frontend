import { Component, OnInit } from '@angular/core';

interface DataItem {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fecha: string;
  hora: string;
  servicio: string;
}

@Component({
  selector: 'app-solicitudes-citas',
  templateUrl: './solicitudes-citas.component.html',
  styleUrl: './solicitudes-citas.component.css'
})
export class SolicitudesCitasComponent implements OnInit {
  
  servicioFilter: string = '';
  data: DataItem[] = [];

  sortColumn: string = 'nombre'; 
  sortDirection: number = 1;

  ngOnInit(): void {}

  onHeaderClick(columnName: string) {
    if (this.sortColumn === columnName) {
      this.sortDirection = this.sortDirection * -1;
    } else {
      this.sortColumn = columnName;
      this.sortDirection = 1;
    }
  }

  applyFilter() {

    this.data = this.data.filter(item => item.servicio === this.servicioFilter || this.servicioFilter === '');
  }

}
