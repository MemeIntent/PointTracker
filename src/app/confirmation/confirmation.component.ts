import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTeacher($myParam: string = '') {
    const navigationDetails: string[] = ['/teacher']
    if($myParam.length) {
      navigationDetails.push($myParam)
    }
    this.router.navigate(navigationDetails)
  }

}
