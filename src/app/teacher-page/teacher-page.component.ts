import {Component, Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';

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
@Injectable()
export class TeacherPageComponent {

  name: string = ""
  reason: string = ""
  pointval: number = 0
  house: string = ""

  constructor(private db: AngularFirestore,
              private _snackBar: MatSnackBar) { }

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

  submitPoints() {
    const now = new Date().toUTCString()
    this.db.collection("housePoints").doc(this.house).get().subscribe(ref => {
      const doc: any = ref.data();
      let current: number = doc.points;
      this.db.collection("housePoints").doc(this.house).update({points: (current + this.pointval)});
      this.db.collection("logs").doc(now).set({student: this.name, reason: this.reason, teacher: firebase.auth().currentUser?.email, points: this.pointval});
      this._snackBar.open("Gave " + this.pointval + " points to " + this.house, "HIDE");
    })
  }
  changePoint(value: any) {
    this.pointval = value;
  }
  changeHouse(value: any) {
    this.house = value;
  }
}
