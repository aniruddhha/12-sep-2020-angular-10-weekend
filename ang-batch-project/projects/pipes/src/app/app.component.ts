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

  mobiles = [
    { name: 'Android', price: 12000 },
    { name: 'iOS', price: 78000 },
    { name: 'BB', price: 35000 },
    { name: 'Win', price: 40000 },
    { name: 'Symbian', price: 40000 },
    { name: 'Palm Os', price: 40000 },
    { name: 'MuditaOs', price: 15000 }
  ]
}
