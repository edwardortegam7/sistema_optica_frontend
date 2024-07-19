import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit{

  public producto: any = {
    id: '',
    categoria: '',
    descripcion: '',
    precioCompra: '',
    precioVenta: '',
    utilidad: 0,
    stock: '',
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  agregarProducto(){
    this.userService.agregarProducto(this.producto).subscribe(dato =>{
      console.log(dato);
      this.redireccionarALista();
    });
  }

  redireccionarALista(){
    this.router.navigate(['/table-inventario'])
  }

  onSubmit(){
    this.agregarProducto();
  }
}
