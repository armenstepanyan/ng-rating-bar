# Rating

## Simple usage
```
<app-ng-rating-bar 
  [(value)]="value" 
  [ratingCount]="10" 
></app-ng-rating-bar>
Value is {{ value }}
```

## Usage with output event
```
    <app-ng-rating-bar
      [value]="value"
      (valueChange)="onValueChange($event)"
      [ratingCount]="10"
    ></app-ng-rating-bar>
```

In component 
```
onValueChange($event: number) {
  this.value = $event
}
```

## Disabled rating
```
  <app-ng-rating-bar
    [value]="5"
    [ratingCount]="7"
    [disabled]="true"
  ></app-ng-rating-bar>

```

## Using in reactive form
In html view
```
<form [formGroup]="myForm">
      <app-ng-rating-bar
        [control]="myForm.get('rating')"
        [ratingCount]="ratingCount"
      ></app-ng-rating-bar>
      
      <p *ngIf="myForm.get('rating').touched && myForm.get('rating').hasError('required')">
        Field is required
      </p>

  <p>
    <button (click)="submitForm()">Submit</button>
  </p>
  </form>
```
In Component

```
  ngOnInit() {
    this.myForm = this.fb.group({
      rating: [null, Validators.required]
    });
  }

  submitForm() {
    this.myForm.get('rating').markAllAsTouched();
    console.log(this.myForm.value);
  }
```

## Hover output
```
  Value is:
  <b
    [class.excellent]="hoverValue === 7"
    [class.good]="hoverValue > 4 && hoverValue < 7"
    [class.notBad]="hoverValue > 2 && hoverValue <= 4 "
    [class.bad]="hoverValue <= 2"
  >
    {{ hoverValue }}
  </b>
  <p>

    <app-ng-rating-bar
      [(value)]="value2"
      (hoverChange)="hoverValue = $event"
      [ratingCount]="7"
    ></app-ng-rating-bar>
  </p>
```

## Set custom color
```
  <app-ng-rating-bar
    [(value)]="value" 
    [ratingCount]="ratingCount" 
    colorActive="red" 
    colorDefault="gray"
  ></app-ng-rating-bar>
```
