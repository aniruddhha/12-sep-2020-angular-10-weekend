import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LittleComponentComponent } from './little-component/little-component.component';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    AppComponent,
    LittleComponentComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
