import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'rating';
  ratingCount = 10;
  value = 0;

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}


  ngOnInit() {

    this.myForm = this.fb.group({
      rating: [null, Validators.required]
    });

  }

/*  onChange($event) {
    const value = $event > 0 ? $event : null;
    console.log(value);
    this.myForm.get('rating').setValue(value);
    this.myForm.get('rating').markAllAsTouched();
  }
*/
  submitForm() {
    this.myForm.get('rating').markAllAsTouched();
    console.log(this.myForm.value);
  }
}
