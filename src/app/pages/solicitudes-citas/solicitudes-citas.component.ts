import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AssignedDoctorService } from '../../services/modal/assignedDoctor/assigned-doctor.service';


@Component({
  selector: 'app-solicitudes-citas',
  templateUrl: './solicitudes-citas.component.html',
  styleUrl: './solicitudes-citas.component.css',
})
export class SolicitudesCitasComponent implements OnInit {
  servicioFilter: string = '';
  modalSwitcher: boolean = false;
  solicitudes: any;

  sortColumn: string = 'nombre';
  sortDirection: number = 1;

  constructor(private userService: UserService, private modal: AssignedDoctorService) {}

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor)=>{
      this.modalSwitcher = valor;
    })
    this.userService.getSolicitudesCitas().subscribe((data) => {
        this.solicitudes = data
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

  openModal() {
    this.modalSwitcher = true;
  }

  
}
