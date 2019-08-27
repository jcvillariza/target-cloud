import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ClrSpinnerModule } from '@clr/angular'
import { AppComponent } from './app.component';
import { RouteGuardService } from '@app/services/RouteGuard/route-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClrSpinnerModule
  ],
  providers: [RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
