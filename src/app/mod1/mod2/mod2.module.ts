import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { Komp1Component } from './komp1/komp1.component';
import { Mod3Module } from './mod3/mod3.module';



@NgModule({
  declarations: [Mod2Component, Komp1Component],
  imports: [
    CommonModule,
    Mod3Module
  ],
  exports: [Mod2Component, Komp1Component]
})
export class Mod2Module { }
