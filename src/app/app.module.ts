import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LikeComponent, BookmarkComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
