import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-component',
  template: `
    <div>
      <h1> this is little component </h1>
    </div>
    
  `,
  styles: [` 
    h1 {
      border : 1px solid blue;
    }  
  `]

  //templateUrl: './little-component.component.html',
  //styleUrls: ['./little-component.component.css']
})
export class LittleComponentComponent implements OnInit {

  nm = 'hi'
  constructor() { }

  ngOnInit(): void {
  }

}
