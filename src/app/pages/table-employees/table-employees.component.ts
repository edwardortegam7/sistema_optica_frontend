import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  TableEmployeesDataSource,
  TableEmployeesItem,
} from './table-employees-datasource';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrl: './table-employees.component.css',
})
export class TableEmployeesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableEmployeesItem>;
  dataSource = new TableEmployeesDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['dni', 'name', 'lastname', 'phone', 'rol'];

  constructor(private userService: UserService) {
    this.dataSource = new TableEmployeesDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.getEmployees().subscribe((data: TableEmployeesItem[]) => {
      console.log(data);
      const employee = data.map((employee: any) => {
        return {
          dni: employee.dni,
          name: employee.name,
          lastname: employee.lastname,
          phone: employee.phone,
          rol: employee.rol,
        };
      });
      this.dataSource.data = employee;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
