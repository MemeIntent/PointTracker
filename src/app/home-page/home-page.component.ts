import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {collection} from "@angular/fire/firestore";
import {getValue} from "@angular/fire/remote-config";
import {getDatabase} from "@angular/fire/database";

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


  refresh() {
    let collection = this.db.collection('housePoints');

    let phildoc = collection.doc("Phileo");
    let chardoc = collection.doc("Chara");
    let gradoc = collection.doc("Gratia");
    let verdoc = collection.doc("Veritas");
    let aeqdoc = collection.doc("Aequitas");

    phildoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.houses[0].score = doc.points;
    })
    chardoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.houses[1].score = doc.points;
    })
    gradoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.houses[2].score = doc.points;
    })
    verdoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.houses[3].score = doc.points;
    })
    aeqdoc.get().subscribe(ref => {
      const doc: any = ref.data();
      this.houses[4].score = doc.points;
    })
  }

  houses = [
    { name: "Phileo", color: "#C9253C", score: this.phileo, imageUrl: "assets/phileo.png", info: "Meaning: Love\n" +
        "Color: Ruby (passion, confidence, determination, and adventure)\n" +
        "Scripture: John 15:13\n" +
        "Representation: Heart, rose, sprig of leaf, crown, and cross" },
    { name: "Chara", color: "#135D32", score: this.chara, imageUrl: "assets/chara.png", info: "Meaning: Joy\n" +
        "Color: Emerald (love, compassion, and abundance)\n" +
        "Scripture: Psalm 5:11\n" +
        "Representation: Sun, stars, and cross"  },
    { name: "Gratia", color: "#E39935", score: this.gratia, imageUrl: "assets/gratia.png", info: "Meaning: Grace\n" +
        "Color: Amber (warmth, wellbeing, and nurturing)\n" +
        "Scripture: Ephesians 2:8-9\n" +
        "Representation: Lion, lamb, and leather strapping"  },
    { name: "Veritas", color: "#154D89", score: this.veritas, imageUrl: "assets/veritas.png", info: "Meaning: Truth\n" +
        "Color: Sapphire (mental focus and order, wisdom, and insight)\n" +
        "Scripture: Psalm 25:5\n" +
        "Representation: Tree of life, roots, Bible, and vines" },
    { name: "Aequitas", color: "#5E5E5C", score: this.aequitas, imageUrl: "assets/aequitas.png", info: "Meaning: Justice\n" +
        "Color: Onyx (focus, discipline, and self-mastery)\n" +
        "Scripture: Psalm 106:3\n" +
        "Representation: Scales of justice, greenery, and crossed swords"  }
  ];



  public ngOnInit(): void {
    this.refresh()
  }
  // getInfo (place : number): string {
  //   if (place = 1) {
  //     const house = this.houses.find((house) => house.score === this.getHighestScore());
  //   }
  // }

  getColor (place: Number): string {
    if (place === 1) {
          const house = this.houses.find((house) => house.name === this.getHighestName());
          return house ? house.color : '';
        }
    if (place === 2) {
      const house = this.houses.find((house) => house.name === this.getSecondHighestName());
      return house ? house.color : '';
    }
    if (place === 3) {
      const house = this.houses.find((house) => house.name === this.getThirdHighestName());
      return house ? house.color : '';
    }
    else {
      return "black"
    }
  }

  is_highest_score(score: number) {
    return Math.max(...this.houses.map(function map(a) {return a.score})) == score
  }

  getHighestScore(): number {
    let highestScore = 0;

    for (const house of this.houses) {
      if (house.score > highestScore) {
        highestScore = house.score;
      }
    }

    return highestScore;
  }

  getHighestName(): string {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const highestName = namesAndScores[0][0];

    const house = this.houses.find((house) => house.name === highestName);
    return house ? house.name : '';
  }

  getHighestImage(): string | undefined {
    const house = this.houses.find((house) => house.score === this.getHighestScore());
    return house ? house.imageUrl : undefined;
  }

  getSecondHighestScore(): number {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const secondHighestScore = namesAndScores[1][1];
    return secondHighestScore;
  }

  getSecondHighestName(): string {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const secondHighestName = namesAndScores[1][0];

    const house = this.houses.find((house) => house.name === secondHighestName);
    return house ? house.name : '';
  }

  getSecondHighestImage(): string | undefined {
    const house = this.houses.find((house) => house.name === this.getSecondHighestName());
    return house ? house.imageUrl : undefined;
  }

  getThirdHighestScore(): number {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const thirdHighestScore = namesAndScores[2][1];
    return thirdHighestScore;
  }

  getThirdHighestName(): string {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const thirdHighestName = namesAndScores[2][0];

    const house = this.houses.find((house) => house.name === thirdHighestName);
    return house ? house.name : '';
  }

  getThirdHighestImage(): string | undefined {
    const house = this.houses.find((house) => house.name === this.getThirdHighestName());
    return house ? house.imageUrl : undefined;
  }

  getFourthHighestScore(): number {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const fourthHighestScore = namesAndScores[3][1];
    return fourthHighestScore;
  }

  getFourthHighestName(): string {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const fourthHighestName = namesAndScores[3][0];

    const house = this.houses.find((house) => house.name === fourthHighestName);
    return house ? house.name : '';
  }

  getFourthHighestImage(): string | undefined {
    const house = this.houses.find((house) => house.name === this.getFourthHighestName());
    return house ? house.imageUrl : undefined;
  }

  getFifthHighestScore(): number {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const thirdHighestScore = namesAndScores[4][1];
    return thirdHighestScore;
  }
  getFifthHighestName(): string {
    const namesAndScores: [string, number][] = this.houses.map((house) => [house.name, house.score]);
    namesAndScores.sort((a, b) => b[1] - a[1]);
    const fifthHighestScore = namesAndScores[4][0];

    const house = this.houses.find((house) => house.name === fifthHighestScore);
    return house ? house.name : '';
  }

  getFifthHighestImage(): string | undefined {
    const house = this.houses.find((house) => house.name === this.getFifthHighestName());
    return house ? house.imageUrl : undefined;
  }





  houses_sorted() {
    return [...this.houses].sort(function points(a, b) {
      if (a.score < b.score) {
        return -1
      } else if (a.score == b.score) {
        return 0
      } else {
        return 1
      }
    }).reverse()
  }
}
