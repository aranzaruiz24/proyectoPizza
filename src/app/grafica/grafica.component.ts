import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import Pedido from '../interfaces/pedido.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  pedidos:Pedido[] = [];
  hawaina:number=0;
  hnolulu:number=0;
  veggie:number=0;
  chicken:number=0;
  peperoni:number=0;
  quesos:number=0;
    ///////////////////GRAFICA de BARRAS /////////////////////////////////////////
  barChartData: ChartDataset[] = [
    { data: [0, 0, 0, 0, 0 , 0], label: 'Pizzas vendidas' }
  ];
  barChartLabels: BaseChartDirective["labels"] = ['Hawaina', 'Hnolulu', 'Veggie', 'Chicken', 'Peperoni','4 Quesos'];
  barChartOptions = { responsive: true};
  barChartType: ChartType = 'bar';
  constructor(private fire:FirebaseService) {
  }
  ngOnInit(): void {
        this.fire.obtenerTodosPedidos().subscribe( pedidos => {
      this.pedidos = pedidos;
      console.log(this.pedidos)
      this.obtenerDatos();
    });
  }
  obtenerDatos(){
    this.pedidos.forEach(pedido => {
      if(pedido.nombrePizza=="Hawaina"){
        this.hawaina++;
        console.log(this.hawaina);
      }else{
        if(pedido.nombrePizza=="Hnolulu"){
          this.hnolulu++;
          console.log(this.hnolulu);
        }else{
          if(pedido.nombrePizza=="Veggie"){
            this.veggie++;
            console.log(this.veggie);
          }else{
            if(pedido.nombrePizza=="Chicken hawaiana"){
              this.chicken++;
              console.log(this.chicken);
            }else{
              if(pedido.nombrePizza=="Peperoni Especial"){
                this.peperoni++;
                console.log(this.peperoni);
              }else{
                if(pedido.nombrePizza=="4 Quesos"){
                  this.quesos++;
                  console.log(this.quesos);
                }
              }
            }
          }
        }
      }
    });
    this.barChartData = [
      { data: [this.hawaina, this.hnolulu, this.veggie, this.chicken, this.peperoni , this.quesos], label: 'Pizzas vendidas' }
    ];
  }
}
