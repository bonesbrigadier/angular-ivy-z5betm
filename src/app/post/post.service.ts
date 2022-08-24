import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, find, Subject } from 'rxjs';
import { Post } from './post';

const _data = [
  { id: 1, title: 'title 1', description: 'description 1', isLiked: false },
  { id: 2, title: 'title 2', description: 'description 2', isLiked: false },
  { id: 3, title: 'title 3', description: 'description 3', isLiked: false },
  { id: 4, title: 'title 4', description: 'description 4', isLiked: true },
  { id: 5, title: 'title 5', description: 'description 5', isLiked: false },
  { id: 6, title: 'title 6', description: 'description 6', isLiked: true },
];

let _state = {
  callerId: 0,
  posts: _data,
};

@Injectable({
  providedIn: 'root',
})
export class PostService {


  private allPostsSubject = new BehaviorSubject<PostServiceResponse>(_state);
  allPosts$ = this.allPostsSubject.asObservable();

  setIsLiked(id: number, isLiked: boolean) {
    var post = _data.find((x) => x.id === id);
    post.isLiked = isLiked;
    var state = { callerId: id, posts: _data }
    this.allPostsSubject.next(state);
  }
}
export class PostServiceResponse {
  posts: Post[];
  callerId: number;
}
