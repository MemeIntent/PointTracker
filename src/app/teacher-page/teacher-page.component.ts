import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})

export class TeacherPageComponent {

  number: number = 0;

  @Output() numberEvent = new EventEmitter<number>();

  constructor() { }

  sendNumber(newItem: number) {
    this.numberEvent.emit(newItem)
  }

  password: string | undefined;

  ngOnInit(): void {
  }


}
