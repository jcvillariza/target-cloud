import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private active: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  set status(state: boolean) {
    this.active.next(state);
  }

  statusObservable() : Observable<boolean> {
    return this.active.asObservable();
  }

  triggerState(state: boolean) {
    this.status = state;
  }
}
