import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css'],
  // providers: [DemoService]
})
export class Cmp1Component implements OnInit {

  cnt = 0

  constructor(
    private dmSr: DemoService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    this.dmSr.changeTextColor(1)
  }

  incClk() {
    this.dmSr.inc()
    this.cnt = this.dmSr.srCntValue()
  }

  colorClicked(btn: number) {
    this.dmSr.changeTextColor(btn)
  }
}
