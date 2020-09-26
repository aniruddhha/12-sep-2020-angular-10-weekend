import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LittleComponentComponent } from './little-component/little-component.component';
import { InlineComponent } from './inline/inline.component';
import { WebNavComponent } from './web-nav/web-nav.component';
import { WebInfoComponent } from './web-info/web-info.component';
import { WebCardContainerComponent } from './web-card-container/web-card-container.component';
import { WebCardComponent } from './web-card-container/web-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LittleComponentComponent,
    InlineComponent,
    WebNavComponent,
    WebInfoComponent,
    WebCardContainerComponent,
    WebCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
