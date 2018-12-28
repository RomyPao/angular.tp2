import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormRegisterComponent } from './form-register/form-register.component';



@NgModule({
  declarations: [RegisterComponent,   FormRegisterComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
