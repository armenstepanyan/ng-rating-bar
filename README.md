# Rating

[Stackblitz Demo](https://stackblitz.com/edit/ng-rating-bar "Demo")

## Import

```
import { NgRatingBarModule } from 'ng-rating-bar';

@NgModule({
  declarations: [...],
  imports: [
    BrowserModule,
	  NgRatingBarModule
  ]
})
```

## Simple usage
```
<ng-rating-bar 
  [(value)]="value" 
  [ratingCount]="10" 
></ng-rating-bar>
Value is {{ value }}
```

## Properties

| Name  | Type | Required | Default |
| ------------- | ------------- | ------------- | ------------- |
| value  | number  | Required       | 0 |
| ratingCount | number  | Required | 5 |
| disabled | boolean  | Optional | false |
| resetAble | boolean  | Optional | false |
| colorActive | string  | Optional | #edb867  |
| colorDefault | string  | Optional | #d2d2d2  |
| styles | Object | Optional | { fontSize: '28px', backgroundColor: '', margin: '5px' } |

## Events
| Event  | Parameter | Description |
| ------ | --------- | ----------- |
| valueChange | (value: number) | Callback to invoke when value was changed |
| hoverChange | (value: number) | Triggered when on hover change |


## Usage with output event
```
    <ng-rating-bar
      [value]="value"
      (valueChange)="onValueChange($event)"
      [ratingCount]="10"
    ></ng-rating-bar>
```

In component 
```
onValueChange($event: number) {
  this.value = $event
}
```

## Disabled rating
```
  <ng-rating-bar
    [value]="5"
    [ratingCount]="7"
    [disabled]="true"
  ></ng-rating-bar>

```

## Using in reactive form
In html view
```
<form [formGroup]="myForm">
      <ng-rating-bar
        [control]="myForm.get('rating')"
        [ratingCount]="ratingCount"
      ></ng-rating-bar>
      
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

    <ng-rating-bar
      [(value)]="value2"
      (hoverChange)="hoverValue = $event"
      [ratingCount]="7"
    ></ng-rating-bar>
  </p>
```

## Set custom color
```
  <ng-rating-bar
    [(value)]="value" 
    [ratingCount]="ratingCount" 
    colorActive="red" 
    colorDefault="gray"
  ></ng-rating-bar>
```

## Custom styles
```
  <ng-rating-bar
      value="5"
      [ratingCount]="10"
      [styles]="{backgroundColor: '#0965ee', margin: '10px', fontSize: '32px'}"
    ></ng-rating-bar>
```
