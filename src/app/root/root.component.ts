import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '@app/services/preloader.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private preloaderService: PreloaderService) { }

  ngOnInit() {
    this.preloaderService.status = false;
  }

}
