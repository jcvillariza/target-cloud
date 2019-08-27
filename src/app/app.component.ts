import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreloaderService } from '@app/services/preloader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'target-cloud';

  private preloaderSubscription: Subscription;

  private preloaderStatus: boolean = true;

  constructor (
    private route: Router,
    private preloaderService: PreloaderService
    ) {}

  ngOnInit() {
    this.preloaderSubscription = this.preloaderService.statusObservable()
      .subscribe({
        next: state => this.preloaderStatus = state
      });

    this.preloaderService.triggerState(true);  

    this.route.navigate(['./login']);
  }

  ngOnDestroy () {
    this.preloaderSubscription.unsubscribe();
  }
}
