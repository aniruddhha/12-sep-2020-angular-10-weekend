import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

//Homework - mouse, key, hover 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'databinding';
  brd = '1px solid red'
  typ = 'text'
  isIpAl = false
  fntWt = 500

  @ViewChild('para', { static: true })
  para: ElementRef<HTMLElement>

  clacProg: number = 0

  ngOnInit() {
    console.log(this.para)
    setTimeout(() => { this.isIpAl = true }, 2500)
  }

  titleInfo() {
    return `Ver ${this.title} 1`
  }

  mathOp() {
    return Math.log10(100)
  }

  clk(btn: number) {
    if (btn == 1) {
      this.fntWt += 250
    } else {
      this.fntWt -= 250
    }
  }

  onProgress(calPrg: number) {
    console.log(`App Comp - Profile Progress Called`)
    this.clacProg = calPrg
  }
}
