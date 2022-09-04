import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.scss'],
})
export class LogViewerComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  }

}
