import { Component, OnInit } from '@angular/core';
import { AssignedDoctorService } from '../../services/modal/assignedDoctor/assigned-doctor.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-assigned-doctor',
  templateUrl: './assigned-doctor.component.html',
  styleUrl: './assigned-doctor.component.css'
})
export class AssignedDoctorComponent implements OnInit {
  info:any;
  
  constructor(private modal: AssignedDoctorService, private userService: UserService) { }

  ngOnInit(): void {
    this.info = this.modal.getSolicitud();
  }

  closeModal(): void {
    this.modal.$modal.emit(false);
  }


}
