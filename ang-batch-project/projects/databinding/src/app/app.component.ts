import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    setTimeout(() => { this.isIpAl = true }, 2500)
  }

  titleInfo() {
    return `Ver ${this.title} 1`
  }
}
