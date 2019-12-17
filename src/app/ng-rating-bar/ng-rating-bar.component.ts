import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-ng-rating-bar",
  templateUrl: "./ng-rating-bar.component.html",
  styleUrls: ["./ng-rating-bar.component.scss"]
})
export class NgRatingBarComponent implements OnInit, OnChanges {
  @Input() ratingCount: number;
  @Input() colorActive: string;
  @Input() colorDefault: string;

  @Input() control: FormControl;

  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  numbers = [];
  hoverIndex = -1;
  selectedValue = 0;
  constructor() {}

  ngOnInit() {
    console.log(this.control);
    this.ratingCount = this.ratingCount || 5;
    this.colorActive = this.colorActive || '#edb867';
    this.colorDefault = this.colorDefault || '#d2d2d2';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value || this.control) {
      this.initNumbers();
    }
  }

  initNumbers() {
    this.numbers = Array(this.ratingCount)
      .fill(0)
      .map((x, i) => i);
    if (this.control) {
      this.selectedValue = this.control.value;
    } else {
      this.selectedValue = this.value;
    }

    this.hoverIndex = this.selectedValue - 1;
  }

  enter(i: number) {
    this.hoverIndex = i;
  }
  leave(i: number) {
    this.hoverIndex = this.selectedValue - 1;
  }

  setSelected(i: number) {
    // set/unset  selected value on same value click
    this.selectedValue = this.selectedValue === i + 1 ? 0 : i + 1;
    if (this.control) {
      this.control.setValue(this.selectedValue || null);
      this.control.markAllAsTouched();
    } else {
      this.valueChange.emit(this.selectedValue);
    }
  }
}
