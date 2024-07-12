import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-solicitudes-citas',
  templateUrl: './solicitudes-citas.component.html',
  styleUrl: './solicitudes-citas.component.css',
})
export class SolicitudesCitasComponent implements OnInit {
  servicioFilter: string = '';

  solicitudes: any;

  sortColumn: string = 'nombre';
  sortDirection: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getSolicitudesCitas().subscribe((data) => {
        this.solicitudes = data
        console.log(this.solicitudes);
      });
  }

  onHeaderClick(columnName: string) {
    if (this.sortColumn === columnName) {
      this.sortDirection = this.sortDirection * -1;
    } else {
      this.sortColumn = columnName;
      this.sortDirection = 1;
    }
  }

  // applyFilter() {
  //   this.solicitudes = this.solicitudes.filter(item => item.servicio === this.servicioFilter || this.servicioFilter === '');
  // }
}
