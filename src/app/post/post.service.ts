import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, find, Subject } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private state = [
    { id: 1, title: 'title 1', description: 'description 1', isLiked: false },
    { id: 2, title: 'title 2', description: 'description 2', isLiked: false },
    { id: 3, title: 'title 3', description: 'description 3', isLiked: false },
    { id: 4, title: 'title 4', description: 'description 4', isLiked: true },
    { id: 5, title: 'title 5', description: 'description 5', isLiked: false },
    { id: 6, title: 'title 6', description: 'description 6', isLiked: true },
  ];

  private allPostsSubject = new BehaviorSubject<PostServiceResponse>({
    callerId: 0,
    posts: this.state,
  });
  allPosts$ = this.allPostsSubject.asObservable();

  setLike(id: number) {
    var post = this.state.find((x) => x.id === id);
    post.isLiked = true;
    this.allPostsSubject.next({ callerId: id, posts: this.state });
  }

  setUnlike(id: number) {
    var post = this.state.find((x) => x.id === id);
    post.isLiked = false;
    this.allPostsSubject.next({ callerId: id, posts: this.state });
  }
}
export class PostServiceResponse {
  posts: Post[];
  callerId: number;
}
