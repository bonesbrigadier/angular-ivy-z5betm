import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loggedInUser$ = this.loginService.loggedInUser$;

  constructor(private loginService: LoginService) { }
}