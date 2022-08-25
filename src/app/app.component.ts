import { Component, VERSION } from '@angular/core';
import { map, take } from 'rxjs';
import { PostService } from './post/post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private postService: PostService) {}

  posts$ = this.postService.posts$.pipe(
    map((x) => x.posts),
    take(1)
  );

  name = 'Angular ' + VERSION.major;
}
