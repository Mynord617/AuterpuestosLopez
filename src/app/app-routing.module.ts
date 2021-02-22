import { NgModule, ɵɵelementContainerStart } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InventarioListaComponent } from './components/pages/inventario-lista/inventario-lista.component';
import { InventarioGaleriaComponent } from './components/pages/inventario-galeria/inventario-galeria.component';
import { InventarioComponent } from './components/pages/inventario/inventario.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { LoginComponent } from './components/Auth/login/login.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'lista',
        component: InventarioListaComponent,
      },
      {
        path: 'galeria',
        component: InventarioGaleriaComponent,
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
