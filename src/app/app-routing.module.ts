import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SelectRolComponent } from './pages/select-rol/select-rol.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';
import { SolicitarCitaComponent } from './pages/solicitar-cita/solicitar-cita.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
