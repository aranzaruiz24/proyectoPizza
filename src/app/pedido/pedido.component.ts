import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Pedido from '../interfaces/pedido.interface';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  nombrePizza:string;
  aux:number;
  pizzas:any[] = [{
    nombre:"Hawaina",
    precio: [100,120,130],
    detalles: "La pizza que unos cuestionan pero todos aman. Jamón, piña",
    img:"/assets/img/HNC.png"
  },{
    nombre:"Hnolulu",
    precio: [110,130,150],
    detalles: "La pizza con la perfecta combinación dulce-salado. Jamón, tocino, piña, jalapeño",
    img:"/assets/img/HONOL.png"
  },{
    nombre:"Veggie",
    precio: [100,120,150],
    detalles: "¡Sólo vegetales! Nuestra opción sin carne. Pimiento, champiñones, aceitunas, cebolla.",
    img:"/assets/img/VGP.png"
  },{
    nombre:"Chicken hawaiana",
    precio: [140,160,180],
    detalles: "La pizza más tropical que tenemos. Pollo, tocino, piña, salsa mango habanero.",
    img:"/assets/img/CHIHNC.png"
  },
  {
    nombre:"Peperoni Especial",
    precio: [110,140,150],
    detalles: "La combinación perfecta entre Pepperoni y Champiñones, con un gran sabor y horneado al momento.",
    img:"/assets/img/PES.png"
  },  {
    nombre:"4 Quesos",
    precio: [120,140,160],
    detalles: "La pizza pensada en los amantes del queso. Queso mozzarella, queso crema, queso cheddar, queso parmesano.",
    img:"/assets/img/4Q.png"
  }
];
  formulario: FormGroup;
  pedido:Pedido;
  email:any="";
  telefono:any="";
  usuarioActual:Usuario|any={ //Esta variable guarda todos los datos que estan en la base de datos del usuario que se conecta
    nombre:"",  
    apellido:"",
    email:"",
    password:"",
    telefono:"",
  };
  constructor(private fire:FirebaseService, private router:Router,public auth:Auth) { 
    this.formulario = new FormGroup ({
      nombrePizza: new FormControl(),
      tamano: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl(),
    }) ;
  }
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
  agregarPedido(){
    this.pedido= this.formulario.value;
    this.pedido.nombrePizza = this.nombrePizza;
    if(this.formulario.value.tamano=="chica"){
      this.pedido.precio = this.pizzas[this.aux].precio[0];
    }else{
      if(this.formulario.value.tamano=="mediana"){
        this.pedido.precio = this.pizzas[this.aux].precio[1];
      }else{
        if(this.formulario.value.tamano=="grande"){
          this.pedido.precio = this.pizzas[this.aux].precio[2];
      }
    }
  }
    console.log(this.pedido);
  this.pedido.email = this.usuarioActual.email;
    this.fire.agregarPedidoBD(this.pedido)
      .then(res => {
        alert("Su pedido ha sido generado correctamente");
      })
      .catch(error => console.log(error));
    }
  selectPizza(pizzaNombre:string,i:number){
    this.nombrePizza = pizzaNombre; 
    this.aux = i;
  }
}

