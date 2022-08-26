import { Component, VERSION } from '@angular/core';
import { map, take } from 'rxjs';
import { LoginService } from './login/login.service';
import { PostService } from './post/post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private loginService: LoginService,
    private postService: PostService) {}

  loggedInUser$ = this.loginService.loggedInUser$;
  
  posts$ = this.postService.posts$.pipe(
    map((x) => x.posts),
    take(1)
  );

  name = 'Angular ' + VERSION.major;
}
