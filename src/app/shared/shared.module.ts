import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PieComponent } from './pie/pie.component';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [HeaderComponent, PieComponent, GaleryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PieComponent,
    GaleryComponent
  ]
})
export class SharedModule { }
