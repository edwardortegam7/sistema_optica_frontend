import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  VerProductosDataSource,
  VerProductosItem,
} from './ver-productos-datasource';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css'
})
export class VerProductosComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VerProductosItem>;
  dataSource = new VerProductosDataSource();
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['categoria', 'descripcion', 'precioVenta'];

    constructor(private userService: UserService, private router:Router) {
      this.dataSource = new VerProductosDataSource();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
      this.listarInventario();
    }

    private listarInventario(){
      this.userService.getInventario().subscribe((data: VerProductosItem[]) => {
        const inventario = data.map((inventario: any) => {
          return {
            categoria:inventario.categoria,
            descripcion:inventario.descripcion,
            precioVenta:inventario.precioVenta,
          };
        });
        this.dataSource.data = inventario;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }

    ngAfterViewInit(): void {
      this.table.dataSource = this.dataSource;
    }
}
