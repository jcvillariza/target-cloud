import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root.component';
import { ClrIconModule } from '@clr/angular';
import { RouteGuardService } from '@app/services/RouteGuard/route-guard.service';

const routes: Routes = [
  {path: '', component: RootComponent, canActivateChild: [RouteGuardService]}
];

@NgModule({
  declarations: [RootComponent],
  imports: [
    ClrIconModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
