import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isChecked = false

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRt.queryParams.subscribe(qr => {
      console.log(qr)
      this.isChecked = qr['isSession'] == 'true'
    })
  }
}
