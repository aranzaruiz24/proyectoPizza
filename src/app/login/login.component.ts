import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  resultado!: string;

  constructor(private fire:FirebaseService, private router:Router) {
    this.formulario = new FormGroup ({
      email: new FormControl(),
      password: new FormControl(),
      password2: new FormControl(),
    }) ;
  }
  ngOnInit(): void {
  }
  ingresar(){
    if(this.compruebaContrasenas() ){
      this.fire.login(this.formulario.value)
      .then(respuesta => {
        console.log(respuesta);
        this.router.navigate(['/mainUser'])
      })
      .catch(error => console.log(error));
      this.compruebaRoot();
    }
  }
  compruebaRoot(){
    if(this.formulario.value.email=='root' && this.formulario.value.password=='toor'){
      this.router.navigate(['/mainRoot']);
    }
  }
  compruebaContrasenas(){
    if(this.formulario.value.password==this.formulario.value.password2){
      return true;
    }else{
      this.resultado="Las contraseñas no coinciden";
    }
  }
}
