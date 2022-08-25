import { Injectable } from '@angular/core';
import { map, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const _data = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description 2',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description 4',
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 5,
    title: 'title 5',
    description: 'description 5',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 6,
    title: 'title 6',
    description: 'description 6',
    isLiked: true,
    isBookmarked: true,
  },
];

// let _state: PostServiceResponse = {
//   callerId: 0,
//   posts: _data,
//   type: '',
// };

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<string>();
  // allPosts$ = this.searchSubject.asObservable();

  posts$ = this.searchSubject.pipe(
    switchMap((searchTerm) =>
      of(_data).pipe(
        map((x) => x.filter((f) => f.title.startsWith(searchTerm)))
      )
    )
  );

  // setIsLiked(id: number, isLiked: boolean) {
  //   var post = _data.find((x) => x.id === id);
  //   post.isLiked = isLiked;
  //   var state = { callerId: id, posts: _data, type: 'like' };
  //   this.allPostsSubject.next(state);
  // }

  // setIsBookmarked(id: number, isBookmarked: boolean) {
  //   var post = _data.find((x) => x.id === id);
  //   post.isBookmarked = isBookmarked;
  //   var state = { callerId: id, posts: _data, type: 'bookmark' };
  //   this.allPostsSubject.next(state);
  // }

  search(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
}
// export class PostServiceResponse {
//   callerId: number;
//   posts: Post[];
//   type: string;
// }
