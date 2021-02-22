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
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { LoginComponent } from './components/Auth/login/login.component';

//FIREBASE 
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    InventarioListaComponent,
    InventarioGaleriaComponent,
    InventarioComponent,
    ContainerAppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
