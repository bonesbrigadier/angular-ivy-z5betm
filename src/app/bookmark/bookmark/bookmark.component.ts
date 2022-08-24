import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, map, switchMap, tap } from 'rxjs';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkComponent {
  _id: number;

  @Input()
  set id(value: number) {
    this.idSubject.next(value);
    this._id = value;
  }
  
  isSubmitting = false;

  private idSubject = new BehaviorSubject<number>(1);

  constructor(private bookmarkService: BookmarkService) { }

  currentState$ = this.idSubject.pipe(
    switchMap((id) => this.bookmarkService.getCurrentState$(id)),
    tap((post) => {
      console.log(post);
      if (this.isSubmitting === true && this._id === post.callerId)
        this.isSubmitting = false;
    }),
    map((x) => x.posts.find((f) => f.id === this._id)),
    map((x) => x.isLiked),
    catchError(() => [])
  );

  bookmark() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.bookmarkService.setIsBookmarked(this._id, true);
    }, 5000);
  }

  unbookmark() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.bookmarkService.setIsBookmarked(this._id, false);
    }, 5000);
  }
}