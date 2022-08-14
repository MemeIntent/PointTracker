import { Component, OnInit } from '@angular/core';

interface Houses {
  value: string;
  viewValue: string;
}
interface Points {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})

export class TeacherPageComponent {

  constructor() { }

  houses: Houses[] = [
    {value: 'Aequitas', viewValue: 'Aequitas'},
    {value: 'Veritas', viewValue: 'Veritas'},
    {value: 'Gratia', viewValue: 'Gratia'},
    {value: 'Chara', viewValue: 'Chara'},
    {value: 'Phileo', viewValue: 'Phileo'}
  ];
  points: Points[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5}
  ];

  // submitPoints(this.name, this.reason) {
  //
  // }
}
