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

  setIsLiked(id: number, isLiked: boolean) {
    this.postService.setIsLiked(id, isLiked);
  }

  // unlike(id: number) {
  //   this.postService.setIsLiked(id, false);
  // }
}

export class liked {
  id: number;
  isLiked: boolean;
}
