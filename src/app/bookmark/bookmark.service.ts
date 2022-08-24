import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private postService: PostService) {}

  getCurrentState$(id: number) {
    return this.postService.allPosts$;
  }

  setIsBookmarked(id: number, isLiked: boolean) {
    this.postService.setIsBookmarked(id, isLiked);
  }
}
