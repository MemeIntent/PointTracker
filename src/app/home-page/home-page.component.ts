import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  message = "Wait for it..."

  phileoNumber = 12;
  click() {
    this.phileoNumber += 1;
  }


  constructor() { }

  recieveMessage($event:string) {
    this.message = $event
  }



  ngOnInit(): void {
  }

}
