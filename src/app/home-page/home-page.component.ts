import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {collection} from "@angular/fire/firestore";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  phileo = 0
  chara = 0
  gratia = 0
  veritas = 0
  aequitas = 0
  constructor(private db: AngularFirestore) { }

  refresh() {
    let collection = this.db.collection('housePoints');

    let phildoc = collection.doc("Phileo");
    let chardoc = collection.doc("Chara");
    let gradoc = collection.doc("Gratia");
    let verdoc = collection.doc("Veritas");
    let aeqdoc = collection.doc("Aequitas");

    phildoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.phileo = doc.points;
    })
    chardoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.chara = doc.points;
    })
    gradoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.gratia = doc.points;
    })
    verdoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.veritas = doc.points;
    })
    aeqdoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.aequitas = doc.points;
    })
  }
  public ngOnInit(): void {
    this.refresh()
  }
}
