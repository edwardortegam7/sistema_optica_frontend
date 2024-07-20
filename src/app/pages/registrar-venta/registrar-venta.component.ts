import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent implements OnInit {

  public venta: any = {
    id: '',
    fecha: '',
    cliente: '',
    producto: '',
    monto: 0,
    estado: 'Por entregar',
  };

  public clientes: any[] = [];
  public productos: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getClientes().subscribe(data => {
      this.clientes = data;
    });

    this.userService.getInventario().subscribe(data => {
      this.productos = data;
    });
  }

  onProductoChange(event: any) {
    const productoId = +event.target.value; // Convertir a número
    if (productoId) {
      this.userService.getInventarioPorId(productoId).subscribe((producto: any) => {
        if (producto) {
          this.venta.monto = producto.precioVenta; // Actualiza el monto con el precio del producto seleccionado
        } else {
          this.venta.monto = 0; // Si no se encuentra el producto, limpia el campo
        }
      });
    } else {
      this.venta.monto = 0;
    }
  }

  getClienteNombre(clienteId: number): string {
    const cliente = this.clientes.find(cliente => cliente.id === clienteId);
    return cliente ? `${cliente.nombres} ${cliente.apellidos}` : '';
  }

  getProductoDescripcion(productoId: number): string {
    const producto = this.productos.find(producto => producto.id === productoId);
    return producto ? producto.descripcion : '';
  }

  agregarVenta() {
    this.userService.agregarVenta(this.venta).subscribe(dato => {
      console.log(dato);
      this.redireccionarALista();
    });
  }

  redireccionarALista() {
    this.router.navigate(['/table-venta']);
  }

  onSubmit() {
    this.venta.cliente = this.getClienteNombre(+this.venta.cliente);
    this.venta.producto = this.getProductoDescripcion(+this.venta.producto);
    this.agregarVenta();
  }
}
