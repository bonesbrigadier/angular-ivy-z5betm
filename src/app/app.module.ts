import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    LikeComponent,
    BookmarkComponent,
    SearchComponent,
    SearchResultsComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
