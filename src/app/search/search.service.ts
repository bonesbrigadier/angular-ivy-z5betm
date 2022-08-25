import { Injectable } from '@angular/core';
import { map, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<string>();
  private startedSearchSubject = new Subject<boolean>();

  state = false;

  posts$ = this.searchSubject.pipe(
    switchMap((searchTerm) =>
      of(_data).pipe(
        map((x) => x.filter((f) => f.title.startsWith(searchTerm)))
      )
    ),
    tap(x => this.startedSearchSubject.next(false))
  );

  startedSearch$ = this.startedSearchSubject.asObservable();

  search(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }

  startedSearch() {
    this.startedSearchSubject.next(true);
  }
}