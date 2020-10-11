import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[clFmt]'
})
export class TabCellDirective {

  @HostBinding('style.background')
  bkCl: string

  @HostBinding('class.text-success')
  txMt: boolean

  constructor() { }

  @HostListener('mouseenter')
  msEnt() {
    this.bkCl = '#e8e8e8'
    this.txMt = true
  }

  @HostListener('mouseleave')
  msLv() {
    this.bkCl = 'white'
    this.txMt = false
  }
}
