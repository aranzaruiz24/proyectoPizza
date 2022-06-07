import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  formulario:FormGroup
  constructor(private http:HttpClient) {
    this.formulario = new FormGroup ({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required,Validators.email]),
      asunto: new FormControl('',[Validators.required]),
      pregunta: new FormControl('',[Validators.required]),
      }) ;
   }

  ngOnInit(): void {
  }
  enviarCorreo(){
    console.log(this.formulario.value);
    let params = {
      nombre:this.formulario.value.nombre,
      email:this.formulario.value.correo,
      asunto:this.formulario.value.asunto,
      mensaje:this.formulario.value.pregunta,
    }
    console.log(params);
    
    this.http.post('http://localhost:3000/envio',params).subscribe(respuesta =>{
      console.log(respuesta);
    })

  }
}
