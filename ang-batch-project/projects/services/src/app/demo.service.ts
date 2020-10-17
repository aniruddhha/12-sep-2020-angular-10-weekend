export class DemoService {

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
}
