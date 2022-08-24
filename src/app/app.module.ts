import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, LikeComponent, BookmarkComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
