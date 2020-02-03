import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number;
  @Output() clickedItem: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onStarClick(): void {
    console.log(`the rating ${this.rating} was clicked!`)
    this.clickedItem.emit(this.rating.toString())
  }
}