import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})

export class TeacherPageComponent {


  @Output() numberPoints = new EventEmitter<number>();
  @Output() nameHouse = new EventEmitter<string>();

  constructor() { }

  sendInfo(houseName: string, pointsAwarded: number) {
    this.numberPoints.emit(pointsAwarded);
    this.nameHouse.emit(houseName);
  }

  password: string | undefined;

  ngOnInit(): void {
  }


}
