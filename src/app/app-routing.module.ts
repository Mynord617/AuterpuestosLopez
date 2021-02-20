import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InventarioListaComponent } from './components/pages/inventario-lista/inventario-lista.component';
import { InventarioGaleriaComponent } from './components/pages/inventario-galeria/inventario-galeria.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: InventarioListaComponent
  },
  {
    path:'galeria',
    component: InventarioGaleriaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
