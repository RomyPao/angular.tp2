import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { Punto9Module } from './punto9/punto9.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ControlPanelModule,
    LoginModule,
    RegisterModule,
    Punto9Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
