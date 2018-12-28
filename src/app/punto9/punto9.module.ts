import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Punto9Component } from './punto9.component';
//import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [EncabezadoComponent, DetalleComponent, Punto9Component],
  imports: [
    CommonModule
  ],
  exports: [
    Punto9Component
  ]
})
export class Punto9Module { }
