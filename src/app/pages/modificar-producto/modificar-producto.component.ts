import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrl: './modificar-producto.component.css'
})
export class ModificarProductoComponent implements OnInit{

  public producto: any = {
    id: '',
    categoria: '',
    descripcion: '',
    precioCompra: '',
    precioVenta: '',
    utilidad: 0,
    stock: '',
  };

  idParametro:number=0;

  constructor(
    private userService: UserService,
    private router: Router,
    private route:ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.idParametro = this.route.snapshot.params['id'];
    this.userService.getInventarioPorId(this.idParametro).subscribe(dato => {
      this.producto = dato;
    });
  }

  modificarProducto(){
    this.userService.modificarProducto(this.idParametro,this.producto).subscribe(dato =>{
      console.log(dato);
      this.redireccionarALista();
    });
  }

  redireccionarALista(){
    this.router.navigate(['/table-inventario'])
  }

  onSubmit(){
    this.modificarProducto();
  }
}
