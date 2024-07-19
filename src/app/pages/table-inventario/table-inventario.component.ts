import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  TableInventarioDataSource,
  TableInventarioItem,
} from './table-inventario-datasource';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrl: './table-inventario.component.css'
})
export class TableInventarioComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableInventarioItem>;
  dataSource = new TableInventarioDataSource();
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'categoria', 'descripcion', 'precioCompra', 'precioVenta','utilidad','stock','actions'];

    constructor(private userService: UserService, private router:Router) {
      this.dataSource = new TableInventarioDataSource();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
      this.listarInventario();
    }

    private listarInventario(){
      this.userService.getInventario().subscribe((data: TableInventarioItem[]) => {
        const inventario = data.map((inventario: any) => {
          return {
            id: inventario.id,
            categoria:inventario.categoria,
            descripcion:inventario.descripcion,
            precioCompra:inventario.precioCompra,
            precioVenta:inventario.precioVenta,
            utilidad:inventario.utilidad,
            stock:inventario.stock,
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

    modificarProducto(id:number){
      this.router.navigate(['modificar-producto',id]);
    }

    eliminarProducto(id:number){
      this.userService.eliminarProducto(id).subscribe(dato =>{
        console.log(dato);
        this.listarInventario();
      })
    }
}
