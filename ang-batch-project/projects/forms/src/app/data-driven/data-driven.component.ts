import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      userInfo: this.fb.group({
        yourName: this.fb.control(''),
        company: this.fb.control(''),
        mobile: this.fb.control(''),
        email: this.fb.control('')
      }),
      productInfo: this.fb.group({
        product: this.fb.control(''),
        qty: this.fb.control(''),
        price: this.fb.control(''),
        tax: this.fb.control('')
      }),
      products: this.fb.array([])
    })
  }

  onQuotation() {
    console.log(this.fg.value)
  }
}
