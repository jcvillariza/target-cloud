import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  ClrInputModule,
  ClrPasswordModule,
  ClrFormsModule,
  ClrCheckboxModule
 } from '@clr/angular';
import { LoginRoutingModule } from './login-routing.module';

const clrModules = [
  ClrInputModule,
  ClrPasswordModule,
  ClrFormsModule,
  ClrCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    clrModules,
    LoginRoutingModule
  ]
})
export class LoginModule { }
