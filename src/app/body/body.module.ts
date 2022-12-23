import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    TarjetasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetasComponent
  ]
})
export class BodyModule { }
