import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private route: Router) { }

  async canActivateChild() {
    return true;
  }
}
