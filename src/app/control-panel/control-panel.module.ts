import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { PestaniasComponent } from './pestanias/pestanias.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';

@NgModule({
  declarations: [ControlPanelComponent,PestaniasComponent, MenuLateralComponent, DashboardPanelComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ControlPanelComponent,
    PestaniasComponent,
    MenuLateralComponent,
    DashboardPanelComponent
  ]
})
export class ControlPanelModule { }
