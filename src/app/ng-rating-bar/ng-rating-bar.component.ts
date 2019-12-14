import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-rating-bar',
  templateUrl: './ng-rating-bar.component.html',
  styleUrls: ['./ng-rating-bar.component.scss']
})
export class NgRatingBarComponent implements OnInit, OnChanges {
  @Input() ratingCount: number;
  @Input() colorActive: string;
  @Input() colorDefault: string;
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  numbers = [];
  hoverIndex = -1;
  selectedValue = 0;
  constructor() {}

  ngOnInit() {
    this.ratingCount = this.ratingCount || 5;
    this.colorActive = this.colorActive || '#edb867';
    this.colorDefault = this.colorDefault || '#d2d2d2';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.initNumbers();
    }
  }

  initNumbers() {
    this.numbers = Array(this.ratingCount)
      .fill(0)
      .map((x, i) => i);
    this.selectedValue = this.value;
    this.hoverIndex = this.selectedValue - 1;
  }

  enter(i: number) {
    this.hoverIndex = i;
  }
  leave(i: number) {
    this.hoverIndex = this.selectedValue - 1;
  }

  setSelected(i) {
    // set/unset  selected value on same value click
    this.selectedValue = this.selectedValue === i + 1 ? 0 : i + 1;
    this.valueChange.emit(this.selectedValue);
  }
}
