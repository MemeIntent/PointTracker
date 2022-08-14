import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Input() nameHouse = 'nameHouse';
  @Input() numberPoints = 'numberPoints';


  pointsAwarded = 0;

  phileoNumber = 0;



  constructor() { }

  receiveInfo (houseName: string, pointsAwarded: number) {
    this.pointsAwarded = this.pointsAwarded + pointsAwarded;

  }



  ngOnInit(): void {
  }

}
