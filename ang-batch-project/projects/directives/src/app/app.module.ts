import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTabComponent } from './data-tab/data-tab.component';
import { TabCellDirective } from './data-tab/tab-cell.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataTabComponent,
    TabCellDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
