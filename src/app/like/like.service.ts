import { Injectable } from '@angular/core';
import { PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  constructor(private postService: PostService) {}

  getCurrentState$(id: number) {
    return this.postService.allPosts$;
  }

  like(id: number) {
    this.postService.setLike(id);
  }

  unlike(id: number) {
    this.postService.setUnlike(id);
  }
}

export class liked {
  id: number;
  isLiked: boolean;
}
