import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LikeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
