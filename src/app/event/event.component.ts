import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    
    isCollapsed: boolean = true;
    text: string = "Text";

    

  constructor() { }


    toggleCollapse(){
     
     this.isCollapsed = !this.isCollapsed;
    }
    

  ngOnInit(): void {
  }

}
