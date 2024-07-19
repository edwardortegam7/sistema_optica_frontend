import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  TableVentaDataSource,
  TableVentaItem,
} from './table-venta-datasource';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-venta',
  templateUrl: './table-venta.component.html',
  styleUrl: './table-venta.component.css'
})
export class TableVentaComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableVentaItem>;
  dataSource = new TableVentaDataSource();
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'fecha', 'cliente', 'producto', 'monto','estado'];

    constructor(private userService: UserService, private router:Router) {
      this.dataSource = new TableVentaDataSource();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    ngOnInit(): void {
      this.listarVenta();
    }

    private listarVenta(){
      this.userService.getVentas().subscribe((data: TableVentaItem[]) => {
        const venta = data.map((venta: any) => {
          return {
            id: venta.id,
            fecha:venta.fecha,
            cliente:venta.cliente,
            producto:venta.producto,
            monto:venta.monto,
            estado:venta.estado,
          };
        });
        this.dataSource.data = venta;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }

    ngAfterViewInit(): void {
      this.table.dataSource = this.dataSource;
    }
}
