import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Pedido from '../interfaces/pedido.interface';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {
  loading:boolean=true;
  bandera:boolean=true;
  qrInfo:any;
  size:number=300;
  nombre:string;
  pedidos:any[]=[];
  email:any="";
  telefono:any="";
  usuarioActual:Usuario|any={ //Esta variable guarda todos los datos que estan en la base de datos del usuario que se conecta
    nombre:"",  
    apellido:"",
    email:"",
    password:"",
    telefono:"",
  };
  constructor(private fire:FirebaseService, private router:Router,public auth:Auth){}

  ngOnInit(): void {
    this.email=this.auth.currentUser?.email; 
    this.fire.obtenerUsuario(this.email)
    .then(response => {
      response.forEach((user) => {
        this.usuarioActual = user.data();
        console.log(this.usuarioActual)
        this.mostrarPedidos();
      });
    })
    .catch(error => console.log(error));
//O si no, con el telefono del usuario actual tambien podemos obtener el resto de sus datos
    this.telefono = this.auth.currentUser?.phoneNumber;
    this.fire.buscarTelefonoBD(this.telefono)
    .then(response => {
      response.forEach((user) => {
        this.usuarioActual = user.data();
        console.log(this.usuarioActual)
        this.mostrarPedidos();

      });
    })
    .catch(error => console.log(error));
  }
  mostrarPedidos(){
    this.fire.obtenerPedidos(this.usuarioActual.email)
      .then( respuesta => {
        respuesta.forEach((pedido) =>{
          this.pedidos.push(pedido.data());
          console.log(this.pedidos);
          this.loading = false;
        });
      })
      .catch(error => console.log(error));
    this.nombre = this.usuarioActual.nombre+" "+this.usuarioActual.apellido;
    console.log(this.nombre);
  }
  codigo(pedido:Pedido){
    this.bandera=false;
    console.log(pedido);
    this.qrInfo = JSON.stringify(pedido);
  }
}
