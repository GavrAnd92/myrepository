import { Component, OnInit } from '@angular/core';
import { Product} from './product';


let PRODUCTS = [
    {name: "Car", price: 24.5, description: "Description car"},
    {name: "Mouse", price: 50.5, description: "Description Mouse"},
    {name: "Keyboard", price: 20, description: "Description Keyboard"},
    {name: "Powerbank", price: 545, description: "Description Powerbank"}
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }


    productList: Product[] = PRODUCTS;
    
  ngOnInit(): void {
  }

}
