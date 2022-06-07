import { Component, OnInit } from '@angular/core';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios:Usuario[] = [];
  usuario:Usuario = {
    nombre:'alguien',
    apellido:'alguien',
    email:'alguien@example.com',
    password:'*******',
    telefono:'524492036234',
  };
  constructor(private fire:FirebaseService) {
    this.usuarios = [{
      nombre:'prueba',
      apellido:'prueba',
      email:'prueba',
      password:'123456',
      telefono:'123456',
    }];
   }



  ngOnInit(): void {
    this.fire.obtenerUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios)
    });
  }
  editar(usuario:Usuario){
    console.log(usuario);
    this.usuario = usuario;
  }
  eliminar(usuario:Usuario){
    console.log(usuario);
    this.usuario = usuario;
    this.fire.eliminarUsuarios(this.usuario)
      .then(sus =>{
        alert("Usuario Eliminado");
      })
       .catch(error => console.log(error));
  }
  actualizar(){
    this.fire.actualizaUsuario(this.usuario)
    .then(sus =>{
      alert("Usuario Actualizado");
    })
     .catch(error => console.log(error));
  }
}
