import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {collection} from "@angular/fire/firestore";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  phileo = 0
  chara = 0
  gratia = 0
  veritas = 0
  aequitas = 0

  constructor(private db: AngularFirestore) {
  }

  houses = [
    {name: "Phileo",  color: "#C9253C", score: this.phileo},
    {name: "Chara",   color: "#135D32", score: this.chara},
    {name: "Gratia",  color: "#E39935", score: this.gratia},
    {name: "Veritas",  color: "#154D89", score: this.veritas},
    {name: "Aequitas",  color: "#5E5E5C", score: this.aequitas}
  ]

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

  // is_highest_score(score: number) {
  //   return Math.max(...this.houses.map(function map(a) {return a.score})) == score
  // }
  //
  // houses_sorted() {
  //   return [...this.houses].sort(function points(a, b) {
  //     if (a.score < b.score) {
  //       return -1
  //     } else if (a.score == b.score) {
  //       return 0
  //     } else {
  //       return 1
  //     }
  //   }).reverse()
//   }
}
