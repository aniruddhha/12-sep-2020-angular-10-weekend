import { DemoService } from './demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DemoService] // Component Level
})
export class AppComponent {
  title = 'services';

  ngOnInit() {
  }
}
