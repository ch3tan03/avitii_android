import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  //@Output() ratingClicked: EventEmitter<{a1:string,a2:string}> = new EventEmitter<{a1:string,a2:string}>();
  starWidth = 0;
  ratingMessage = '';
  constructor() {
    //console.log("contructor");
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
    this.ratingMessage = this.rating +' / 5';
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
