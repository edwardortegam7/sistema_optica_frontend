import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SelectRolComponent } from './pages/select-rol/select-rol.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';
import { SolicitarCitaComponent } from './pages/solicitar-cita/solicitar-cita.component';
import { SolicitudesCitasComponent } from './pages/solicitudes-citas/solicitudes-citas.component';
import { PagarCitaComponent } from './pages/pagar-cita/pagar-cita.component';
import { CitasAsignadasComponent } from './pages/citas-asignadas/citas-asignadas.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './pages/modificar-producto/modificar-producto.component';
import { TableInventarioComponent } from './pages/table-inventario/table-inventario.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'selected-role',
    component: SelectRolComponent,
    pathMatch:'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch:'full',
  },
  {
    path: 'table-employees',
    component: TableEmployeesComponent,
    pathMatch:'full',
  },
  {
    path: 'solicitar-cita',
    component: SolicitarCitaComponent,
    pathMatch: 'full',
  },
  {
    path: 'solicitudes-citas',
    component: SolicitudesCitasComponent,
    pathMatch: 'full',
  },
  {
    path: 'pagar-cita',
    component: PagarCitaComponent,
    pathMatch: 'full',
  },
  {
    path: 'citas-asignadas',
    component: CitasAsignadasComponent,
    pathMatch: 'full',
  },
  {
    path: 'table-inventario',
    component: TableInventarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'agregar-producto',
    component: AgregarProductoComponent,
    pathMatch: 'full',
  },
  {
    path: 'modificar-producto/:id',
    component: ModificarProductoComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
