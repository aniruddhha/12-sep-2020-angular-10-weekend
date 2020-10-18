import { AllService } from './all.service';
import { DemoService } from './demo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';

// HW - 1, convert progressbar code using services
// HW - 2, table, above each and every column there sould be sort coloumn
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
    AllService
    //  /   DemoService // Module level
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
