import { Component, OnInit } from '@angular/core';
import { AsyncService } from './service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async';
  isLarge = false
  isNormal = true

  // 1. promise and then
  // 2. Observer Design Pattern

  constructor(
    private asyncSer: AsyncService
  ) {

  }

  ngOnInit() {
    this.asyncSer.fbCom().then(dt => console.log(dt))

    this.asyncSer.gpsObserver().subscribe(
      str => { console.log(str) },
      err => { console.error(err) },
      () => { console.log('Operation Completed') }
    )

    interval(1500).subscribe(
      tk => {
        this.isLarge = !this.isLarge
        this.isNormal = !this.isNormal
      },
      err => console.log(err),
    )
  }
}
