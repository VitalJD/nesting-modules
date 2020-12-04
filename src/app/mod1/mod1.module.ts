import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Mod2Module } from './mod2/mod2.module';



@NgModule({
  declarations: [Mod1Component],
  exports: [
    Mod1Component
  ],
  imports: [
    CommonModule,
    Mod2Module
  ]
})
export class Mod1Module { }
