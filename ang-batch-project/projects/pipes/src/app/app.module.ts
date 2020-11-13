import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { DataFliterPipe } from './data-fliter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstUpperPipe,
    DataFliterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
