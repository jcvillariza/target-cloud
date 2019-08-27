import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ClrIconModule } from '@clr/angular';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ClrIconModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
