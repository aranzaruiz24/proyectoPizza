import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavMainComponent } from './nav-main/nav-main.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { NavRootComponent } from './nav-root/nav-root.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import {HttpClientModule} from '@angular/common/http';
import { LetrasPipe } from './pipe/letras.pipe';
import { CodigoqrComponent } from './codigoqr/codigoqr.component'
import { QRCodeModule } from 'angular2-qrcode';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NgChartsModule } from "ng2-charts";
import { LoadingComponent } from './loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    NavUserComponent,
    LoginComponent,
    HomeComponent,
    HomeUserComponent,
    PreguntasComponent,
    ConocenosComponent,
    RegistroComponent,
    HomeRootComponent,
    NavRootComponent,
    TelefonoComponent,
    PedidoComponent,
    MisPedidosComponent,
    LetrasPipe,
    CodigoqrComponent,
    ListaUsuariosComponent,
    GraficaComponent,
    LoadingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    NgChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
