import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }



  shop: Shop = {
                addres: "addres 123",
                name: "Good Shop",
                phone: 38055024545,
                email: "shop@mail.com"
                };


  ngOnInit(): void {
  }

}
