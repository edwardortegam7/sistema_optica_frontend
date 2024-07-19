import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrl: './registrar-venta.component.css'
})
export class RegistrarVentaComponent implements OnInit{

  public venta: any = {
    id: '',
    fecha: '',
    cliente: '',
    producto: '',
    monto: '',
    estado: 'Por Entregar',
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  agregarVenta(){
    this.userService.agregarVenta(this.venta).subscribe(dato =>{
      console.log(dato);
      this.redireccionarALista();
    });
  }

  redireccionarALista(){
    this.router.navigate(['/table-venta'])
  }

  onSubmit(){
    this.agregarVenta();
  }
}
