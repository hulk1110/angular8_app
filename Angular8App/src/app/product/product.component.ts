import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;


  constructor() {

    this.products = [
      {
        id: 4327,
        name: 'watch',
        brand: 'fossil',
        price: 100000,
      }, {
        id: 4328,
        name: 'ac',
        brand: 'LG',
        price: 500000,
      }, {
        id: 4329,
        name: 'Pen',
        brand: 'MOnt Blanc',
        price: 800000,
      }, {
        id: 4330,
        name: 'bed',
        brand: 'Wakefit',
        price: 1000000,
      }
    ];
  }

  ngOnInit() {
  }

}
