import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AdministrativeComponent } from './pages/administrative/administrative.component';
import { SelectRolComponent } from './pages/select-rol/select-rol.component';

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
    path:'admin',
    component: DashboardComponent,
    pathMatch:'full',
    canActivate: [AdminGuard]
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    pathMatch:'full',
    canActivate: [NormalGuard]
  },
  {
    path: 'administrative',
    component: AdministrativeComponent,
    pathMatch:'full',
  },
  {
    path: 'selected-role',
    component: SelectRolComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
