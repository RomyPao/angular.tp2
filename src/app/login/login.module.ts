import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
