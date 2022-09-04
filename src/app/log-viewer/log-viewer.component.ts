import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { getDatabase } from "firebase/database";
import {collection} from "@angular/fire/firestore";

const database = getDatabase();


@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.scss'],
})
export class LogViewerComponent implements OnInit {

  // houseVar = "a";
  // pointsVar  = 0
  // reasonVar = "a"
  // studentVar = "a"
  // teacherVar = "a"
  //
  //
  // refresh() {
  //   let collection = this.db.collection('logs');
  //
  //   let houseDoc = collection.doc("house")
  //   let pointsDoc = collection.doc("points")
  //   let reasonDoc = collection.doc("reason")
  //   let studentDoc = collection.doc("student")
  //   let teacherDoc = collection.doc("teacher")
  //
  //   houseDoc.get().subscribe(ref => {
  //     const doc: any = ref.data();
  //     this.houseVar = doc.house
  //   })
  //   pointsDoc.get().subscribe(ref => {
  //     const doc: any = ref.data();
  //     this.pointsVar = doc.points
  //   })
  //   reasonDoc.get().subscribe(ref => {
  //     const doc: any = ref.data();
  //     this.reasonVar = doc.reason
  //   })
  //   studentDoc.get().subscribe(ref => {
  //     const doc: any = ref.data();
  //     this.studentVar = doc.student
  //   })
  //   teacherDoc.get().subscribe(ref => {
  //     const doc: any = ref.data();
  //     this.teacherVar = doc.teacher
  //   })
  // }

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    // this.refresh()
  }

}
