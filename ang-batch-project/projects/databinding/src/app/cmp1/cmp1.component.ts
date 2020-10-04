import { Component, OnInit, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  @ContentChild('para', { static: true })
  para: ElementRef<HTMLElement>

  @Input()
  progress: number = 15

  constructor() { }

  ngOnInit(): void {
    console.log(this.para)
  }
}
