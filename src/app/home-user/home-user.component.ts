import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  email:any="";
  telefono:any="";
  usuarioActual:Usuario|any={ //Esta variable guarda todos los datos que estan en la base de datos del usuario que se conecta
    nombre:"",  
    apellido:"",
    email:"",
    password:"",
    telefono:"",
  };
  constructor(private fire:FirebaseService, private router:Router,public auth:Auth) { }
//Con el correo del usuario actual podemos obtener el resto de datos que estan en la BD
  ngOnInit(): void {
    this.email=this.auth.currentUser?.email; 
    this.fire.obtenerUsuario(this.email)
    .then(response => {
      response.forEach((user) => {
        this.usuarioActual = user.data();
        console.log(this.usuarioActual)
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
      });
    })
    .catch(error => console.log(error));
  }
 
}
