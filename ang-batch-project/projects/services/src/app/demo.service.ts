import { EventEmitter } from '@angular/core'
import { emit } from 'cluster'

export class DemoService {

  private colorEmitter: EventEmitter<string> = new EventEmitter()

  private srCnt = 0
  constructor() { }

  inc() {
    this.srCnt++
  }

  dec() {
    this.srCnt--
  }

  srCntValue() {
    return this.srCnt
  }

  changeTextColor(btn: number) {
    if (btn == 1) {
      //info
      this.colorEmitter.emit('text-info')
    } else {
      // danger  
      this.colorEmitter.emit('text-danger')
    }
  }

  receiveColor(fn: any) {
    this.colorEmitter.subscribe(fn)
  }
}
