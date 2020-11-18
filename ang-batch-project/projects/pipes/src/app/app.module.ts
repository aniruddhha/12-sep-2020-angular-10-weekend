import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { DataFliterPipe } from './data-fliter.pipe';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FirstUpperPipe,
    DataFliterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
