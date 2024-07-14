import { Component, OnInit } from '@angular/core';
import { AssignedDoctorService } from '../../services/modal/assignedDoctor/assigned-doctor.service';

@Component({
  selector: 'app-assigned-doctor',
  templateUrl: './assigned-doctor.component.html',
  styleUrl: './assigned-doctor.component.css'
})
export class AssignedDoctorComponent implements OnInit {
  
  constructor(private modal: AssignedDoctorService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modal.$modal.emit(false);
  }


}
