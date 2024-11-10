import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpresaComponent } from './component/empresa/empresa.component';
import { RepresentanteLegalComponent } from './component/representante-legal/representante-legal.component';

export const routes: Routes = [
 // Ruta principal, redirige a 'login'
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Ruta para el componente de login
  {
    path: 'login',
    component: LoginComponent
  },
  // Ruta protegida para las vistas que necesitan un layout
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,  // Ruta predeterminada de los hijos
      }
    ]
},
{
    path: 'empresa',
    component: EmpresaComponent,
    children: [
      {
        path: 'representante',
        component: RepresentanteLegalComponent,  // Ruta predeterminada de los hijos
      }
    ]
},
];
