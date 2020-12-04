import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import {Mod2Module} from './mod1/mod2/mod2.module';
import {Mod3Module} from './mod1/mod2/mod3/mod3.module';
import {Mod4Module} from './mod1/mod2/mod3/mod4/mod4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mod1Module,
    Mod2Module,
    Mod3Module,
    Mod4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
