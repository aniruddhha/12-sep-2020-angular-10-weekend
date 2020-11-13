import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes are presenting data';
  dt = new Date()
  price = 450.0134684848

  email = 'aniruddha.kudalkar@gmail.com'
  mobile = '+919607352625'

  em = '********kar@gmail.com'
  mb = '******625'
}
