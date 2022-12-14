import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, catchError, map, switchMap, tap } from 'rxjs';
import { LikeService } from './like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeComponent {
  _id: number;

  @Input()
  set id(value: number) {
    this.idSubject.next(value);
    this._id = value;
  }

  isSubmitting = false;
  // disabled = false;

  private idSubject = new BehaviorSubject<number>(1);

  constructor(public likeService: LikeService) {}

  currentState$ = this.idSubject.pipe(
    switchMap((id) => this.likeService.getCurrentState$(id)),
    tap(post => {
      console.log(post)
      if(this.isSubmitting === true && this._id === post.callerId)
      // if(this.isSubmitting === true && this._id === post.id)
        this.isSubmitting = false
    }),
    map(x => x.posts.find((f) => f.id === this._id)),    
    map((x) => x.isLiked),
    catchError(() => [])
  );

  like() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.likeService.like(this._id)
    }, 5000);
  }

  unlike() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.likeService.unlike(this._id);
    }, 5000);
    
  }
}
