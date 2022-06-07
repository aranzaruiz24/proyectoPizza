import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  constructor(private fire:FirebaseService, private router:Router) {
    this.formulario = new FormGroup ({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      }) ;
   }

  ngOnInit(): void {
  }

  registrar(){
    if (this.formulario.valid){


      console.log("Todos los datos son válidos");
      this.formulario.value.telefono = `+${this.formulario.value.telefono}`
      this.usuario = this.formulario.value;
      //Registramos usuario en BD
      this.fire.agregarUsuarioBD(this.usuario)
        .then(respuesta => {
          console.log(respuesta);
        })
        .catch(error => console.log(error));
        //Registramos el usuario en Firebase auth para que pueda hacer login
        this.fire.crearUsuario(this.usuario.email,this.usuario.password)
          .then(respuesta => {
            console.log(respuesta);
            this.router.navigate(['/login']);
          })
          .catch(error => console.log(error));
    }else{
      console.log("Hay datos inválidos en el formulario");
    }
  
   
  }
}
