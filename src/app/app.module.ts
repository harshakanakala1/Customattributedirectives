import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackGroundDirective } from './Directives/setbackgroundgreen.directive';
import { SetbackgroundyellowDirective } from './Directives/setbackgroundyellow.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackGroundDirective,
    SetbackgroundyellowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
