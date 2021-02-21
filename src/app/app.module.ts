import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InventarioListaComponent } from './components/pages/inventario-lista/inventario-lista.component';
import { InventarioGaleriaComponent } from './components/pages/inventario-galeria/inventario-galeria.component';
import { InventarioComponent } from './components/pages/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    InventarioListaComponent,
    InventarioGaleriaComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
