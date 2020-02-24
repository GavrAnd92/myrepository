import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  private counter: number = 0;

  constructor() { }



  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  getValue(){
    return this.counter;
  }


  getData(){
    let items: string[] = [];

    for(let i=0;i<10;i++){
      items[i] = "Item "+i;
    }

    return items;
  }
}
