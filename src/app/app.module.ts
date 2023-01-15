import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { PiGameComponent } from './pi-game/pi-game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PiGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent,PiGameComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(PiGameComponent, { injector });
    customElements.define('pi-game-widget', el);
  }
  ngDoBootstrap() {}
 }
