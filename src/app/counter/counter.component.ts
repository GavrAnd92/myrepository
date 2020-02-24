import { Component, OnInit } from '@angular/core';
import { CounterService} from './counter.service';   //add

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService]   //add
})
export class CounterComponent implements OnInit {


  private counter: number = 0;
  itemsSource: string[];

  constructor(private svc: CounterService) { }

  plusOne(){
    this.svc.increment();
    this.counter = this.svc.getValue();
  }
  
  minusOne(){
    this.svc.decrement();
    this.counter = this.svc.getValue();
  }

  ngOnInit(): void {

    this.itemsSource = this.svc.getData();
  }

}
