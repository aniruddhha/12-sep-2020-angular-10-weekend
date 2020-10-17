import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
  // providers: [DemoService]
})
export class Cmp2Component implements OnInit {

  cnt = 0

  constructor(
    private dmSr: DemoService
  ) { }

  ngOnInit(): void {
  }

  decClk() {
    this.dmSr.dec()
    this.cnt = this.dmSr.srCntValue()
  }

}
