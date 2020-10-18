import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
  // providers: [DemoService]
})
export class Cmp2Component implements OnInit {

  textColor: string
  cnt = 0

  constructor(
    private dmSr: DemoService
  ) { }

  ngOnInit(): void {
    this.dmSr.receiveColor(tssCol => {
      console.log(tssCol)
      this.textColor = tssCol
    })
  }


  decClk() {
    this.dmSr.dec()
    this.cnt = this.dmSr.srCntValue()
  }
}
