import { DemoService } from './demo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //  /   DemoService // Module level
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
