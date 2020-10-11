import { Directive, ElementRef, HostBinding, HostListener, Input, Host } from '@angular/core';

@Directive({
  selector: '[clFmt]'
})
export class TabCellDirective {

  @Input()
  @HostBinding('style.background')
  clFmt: string

  @HostBinding('class.text-success')
  txMt: boolean

  @HostBinding('attr.role')
  at: string

  constructor() { }

  @HostListener('mouseenter')
  msEnt() {
    this.clFmt = '#e8e8e8'
    this.txMt = true
    this.at = 'hi'
  }

  @HostListener('mouseleave')
  msLv() {
    this.clFmt = 'white'
    this.txMt = false
  }

  @HostListener('click', ['$event'])
  clk(ev: MouseEvent) {
    const row: HTMLTableRowElement = ev.target['parentElement']

    for (let i = 0; i < row.children.length; i++) {
      const item = row.children.item(i)
      console.log(item)
      if (i == 2 || i == 3 || i == 4 || i == 5) {
        item.innerHTML = `<input type='text' value=${item.textContent}>`
      }
    }
  }

  @HostListener('keyup.enter', ['$event'])
  kyEnt(ev: KeyboardEvent) {
    if (ev.target instanceof HTMLInputElement) {
      // console.log(ev.target['parentElement']['parentElement'])
      const row = ev.target['parentElement']['parentElement']
      console.log(row.children.item(2).children.item(0)['value'])
      row.children.item(2).innerHTML = row.children.item(2).children.item(0)['value']
      row.children.item(3).innerHTML = row.children.item(3).children.item(0)['value']
      row.children.item(4).innerHTML = row.children.item(4).children.item(0)['value']
      row.children.item(5).innerHTML = row.children.item(5).children.item(0)['value']
    }
  }

  textValue(el: HTMLElement) {

  }
}
