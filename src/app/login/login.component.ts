import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { User } from '../post/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loggedInUser$ = this.loginService.loggedInUser$;

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }
}
