import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct() {
    return [
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
}
