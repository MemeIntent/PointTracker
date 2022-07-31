import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  constructor() { }

  password: string | undefined;

  ngOnInit(): void {
  }

  login() {
    if (this.password == 'TEST123') {
      console.log('adjioawjoidjaiodjowiajdowa')
    } else {
      console.log("error")
    }
  }

}
