import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
