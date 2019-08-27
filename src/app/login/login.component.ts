import { Component, OnInit } from '@angular/core';
import { LoginForm } from '@app/models/login/login';
import { PreloaderService } from '@app/services/preloader.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: LoginForm;

  constructor(private preloaderService: PreloaderService) { }

  ngOnInit() {
    this.loginForm = {username: '', password: ''};

    this.preloaderService.status = false;
  }

  loginClick() {
    console.log(this.loginForm);
  }

}
