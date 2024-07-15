import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CitasAsignadasDataSource, CitasAsignadasItem } from './citas-asignadas-datasource';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-citas-asignadas',
  templateUrl: './citas-asignadas.component.html',
  styleUrl: './citas-asignadas.component.css'
})
export class CitasAsignadasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CitasAsignadasItem>;
  dataSource = new CitasAsignadasDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombres', 'apellidos', 'fecha', 'hora', 'nomDoctor', 'apeDoctor'];

  constructor(private userService: UserService) {
    this.dataSource = new CitasAsignadasDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.getCitasAsignadas().subscribe((data: CitasAsignadasItem[]) => {
      console.log(data);
    });  // TODO: send request to backend to fetch data
      
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
