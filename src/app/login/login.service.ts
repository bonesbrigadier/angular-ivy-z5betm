import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../post/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUserSubject = new BehaviorSubject<User>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  login() {
    this.loggedInUserSubject.next({ displayName: 'G' });
  }

  logout() {
    this.loggedInUserSubject.next(null);
  }
}