/*import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

}*/

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      id: [data.id],
      dni: [data.dni],
      nombres: [data.nombres],
      apellidos: [data.apellidos],
      telefono: [data.telefono],
      //rol : [datarol.rol]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log("antes Employee data to update:", this.editForm.value);
      this.userService.updateEmployee(this.data.id, this.editForm.value).subscribe(
        () => {
          this.snackBar.open('Empleado actualizado con éxito', 'Cerrar', {
            duration: 2000,
          });
          this.dialogRef.close(true);
        },
        error => {
          this.snackBar.open('Error al actualizar el empleado', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }

    console.log("despues Employee data to update:", this.editForm.value);
  }
}

