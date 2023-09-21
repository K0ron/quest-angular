import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { BlockComponent } from '../app/block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HightlightDirective } from './hightlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    MoviesListComponent,
    HightlightDirective,
    DisplayMoviesDirective,
  ],
  imports: [BrowserModule, FormsModule, CardModule],
  providers: [NgModule, CardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
