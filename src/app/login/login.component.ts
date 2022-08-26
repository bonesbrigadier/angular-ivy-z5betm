import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { User } from '../post/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loggedInUserSubject = new BehaviorSubject<User>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  login() {
    this.loggedInUserSubject.next({ displayName: 'G' });
  }

  logout() {
    this.loggedInUserSubject.next(null);
  }
}
