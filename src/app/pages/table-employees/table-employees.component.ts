import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableEmployeesDataSource, TableEmployeesItem } from './table-employees-datasource';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrl: './table-employees.component.css'
})
export class TableEmployeesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableEmployeesItem>;
  dataSource = new TableEmployeesDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['dni', 'name', 'lastname', 'phone', 'rol'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
