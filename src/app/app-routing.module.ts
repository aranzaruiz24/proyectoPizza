import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { GraficaComponent } from './grafica/grafica.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeComponent } from './home/home.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RegistroComponent } from './registro/registro.component';
import { TelefonoComponent } from './telefono/telefono.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component:HomeComponent},
  { path: 'mainUser', component:HomeUserComponent},
  { path: 'mainRoot', component:HomeRootComponent},
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'telefono', component:TelefonoComponent},
  { path: 'conocenos', component:ConocenosComponent},
  { path: 'preguntas', component:PreguntasComponent},
  { path: 'pedido', component:PedidoComponent},
  { path: 'mispedidos', component:MisPedidosComponent},
  { path: 'listaUsuarios', component:ListaUsuariosComponent},
  { path: 'grafica', component:GraficaComponent},
  { path: 'loading', component:LoadingComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
