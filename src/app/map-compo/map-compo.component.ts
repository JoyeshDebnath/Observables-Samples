//map iterates over each value and performs operations

import { Component, OnInit } from '@angular/core';
import { from, map, pipe } from 'rxjs';
@Component({
  selector: 'app-map-compo',
  templateUrl: './map-compo.component.html',
  styleUrls: ['./map-compo.component.css'],
})
export class MapCompoComponent implements OnInit {
  scrArr = from([1, 2, 3, 4, 5]);

  ngOnInit(): void {
    this.multiplyBy2();
    this.caseConvert();
  }
  multiplyBy2() {
    this.scrArr
      .pipe(
        map((val) => {
          return val * 2;
        })
      )
      .subscribe((val) => console.log(val));
  } //example 1 : map on array

  //Example 2 : coverts lower to uppercase or vice versa
  nameArr = from(['amit', 'Laddu', 'chetan']);

  caseConvert() {
    this.nameArr
      .pipe(map((name) => name.toUpperCase()))
      .subscribe((convertedName) => console.log(convertedName));
  }
}
