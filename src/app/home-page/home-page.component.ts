import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  number = 0;

  phileoNumber = 12;
  click() {
    this.phileoNumber += 1;
  }


  constructor() { }

  receiveNumber($event:number) {
    this.number = $event
  }



  ngOnInit(): void {
  }

}
