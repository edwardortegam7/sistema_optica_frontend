import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  TableEmployeesDataSource,
  TableEmployeesItem,
} from './table-employees-datasource';
import { UserService } from '../../services/user/user.service';
//Import de formulario
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  //styleUrl: './table-employees.component.css',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableEmployeesItem>;
  //dataSource: TableEmployeesDataSource;
  dataSource = new TableEmployeesDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'id','dni', 'nombres', 'apellidos', 'telefono', 'rol', 'Acciones'];

  constructor(private userService: UserService,  private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.dataSource = new TableEmployeesDataSource();
    this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.getEmployees().subscribe((data: TableEmployeesItem[]) => {
      const employee = data.map((employee: any) => {
        return {
          id: employee.id, 
          dni: employee.dni,
          nombres: employee.nombres,
          apellidos: employee.apellidos,
          telefono: employee.telefono,
          rol: employee.rol,
        };
      });
      this.dataSource.data = employee;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
   //this.dataSource.paginator = this.paginator;
   //this.dataSource.sort = this.sort;
    //Antes estaba solo este
    this.table.dataSource = this.dataSource;
    //Ahora se agregaron 
    
  }

  onDelete(row: TableEmployeesItem): void {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.userService.eliminarEmpleado(row.id).subscribe(
        () => {
          // Actualizar la lista de empleados después de eliminar
          this.dataSource.data = this.dataSource.data.filter(employee => employee.id !== row.id);
          this.table.renderRows(); 
          this.snackBar.open('Empleado eliminado con éxito', 'Cerrar', {
            duration: 2000,
          });
        },
        error => {
          this.snackBar.open('Error al eliminar el empleado', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }
  }

  onEdit(row: TableEmployeesItem): void {
    console.log("Ingrese a onedit ")
  const dialogRef = this.dialog.open(EditEmployeeComponent, {
    width: '400px',
    data: row
    
  });
  


dialogRef.afterClosed().subscribe(result => {
  if (result) {
    // Recargar los datos de la tabla después de una edición exitosa
   // this.loadEmployees();
   console.log("Despues de Aca se hacia el load ")
  }
});
  }

loadEmployees(): void {
  this.userService.getEmployees().subscribe((data: TableEmployeesItem[]) => {
    const employee = data.map((employee: any) => {
      return {
        id: employee.id, 
        dni: employee.dni,
        nombres: employee.nombres,
        apellidos: employee.apellidos,
        telefono: employee.telefono,
        rol: employee.rol,
      };
    });
    this.dataSource.data = employee;
  });
}


}




  
