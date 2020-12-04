import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3Component } from './mod3.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Mod4Module } from './mod4/mod4.module';



@NgModule({
  declarations: [Mod3Component, Compo1Component, Compo2Component],
  imports: [
    CommonModule,
    Mod4Module
  ],
  exports: [Mod3Component, Compo1Component, Compo2Component]
})
export class Mod3Module { }
