import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod4Component } from './mod4.component';
import { Kt1Component } from './kt1/kt1.component';
import { Kt2Component } from './kt2/kt2.component';
import { Kt3Component } from './kt3/kt3.component';
import { Kt4Component } from './kt4/kt4.component';



@NgModule({
  declarations: [Mod4Component, Kt1Component, Kt2Component, Kt3Component, Kt4Component],
  imports: [
    CommonModule
  ],
  exports: [Mod4Component, Kt1Component, Kt2Component, Kt3Component, Kt4Component]
})
export class Mod4Module { }
