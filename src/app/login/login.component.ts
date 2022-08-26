import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loggedInUserSubject = new BehaviorSubject<boolean>(false);
  loggedInUser$ = of(null);

  login() {
    this.loggedInUserSubject.next(true);
  }

  logout() {
    this.loggedInUserSubject.next(false);
  }
}
