import { Component, OnInit } from '@angular/core';
// import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: [ './grafica1.component.css' ]
})
export class Grafica1Component implements OnInit {

  // labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels1: Label[] = ['venta internet', 'venta tienda', 'venta mail'];

  public data1: MultiDataSet = [ [350, 450, 100], ];

  public color1: Color[] = [
    {
      backgroundColor: [ '#9E120E', '#FF5800', '#FFB414']
    }
  ];

  public labels2: Label[] = ['compras internet', 'compras tienda', 'compras mail'];

  public data2: MultiDataSet = [ [3, 5, 10], ];

  public color2: Color[] = [
    {
      backgroundColor: [ '#f90000', '#cd2bd8', '#32de1d']
    }
  ];

  public labels3: Label[] = ['bitcoin', 'ethereum', 'otras'];

  public data3: MultiDataSet = [ [68, 24, 8], ];

  public color3: Color[] = [
    {
      backgroundColor: [ '#7ccdf5', '#1888bf', '#145e82']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
