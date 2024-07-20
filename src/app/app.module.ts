import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './services/auth.interceptor'; 

import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { SelectRolComponent } from './pages/select-rol/select-rol.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserService } from './services/user/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolicitarCitaComponent } from './pages/solicitar-cita/solicitar-cita.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SolicitudesCitasComponent } from './pages/solicitudes-citas/solicitudes-citas.component';
import { PagarCitaComponent } from './pages/pagar-cita/pagar-cita.component';
import { AssignedDoctorComponent } from './modals/assigned-doctor/assigned-doctor.component';
import { CitasAsignadasComponent } from './pages/citas-asignadas/citas-asignadas.component';
import { TableInventarioComponent } from './pages/table-inventario/table-inventario.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './pages/modificar-producto/modificar-producto.component';
import { TableVentaComponent } from './pages/table-venta/table-venta.component';
import { RegistrarVentaComponent } from './pages/registrar-venta/registrar-venta.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SelectRolComponent,
    DashboardComponent,
    TableEmployeesComponent,
    SolicitarCitaComponent,
    SolicitudesCitasComponent,
    PagarCitaComponent,
    AssignedDoctorComponent,
    CitasAsignadasComponent,
    TableInventarioComponent,
    AgregarProductoComponent,
    ModificarProductoComponent,
    TableVentaComponent,
    RegistrarVentaComponent,
    VerProductosComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync(), authInterceptorProviders, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
