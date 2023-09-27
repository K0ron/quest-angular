import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { BlockComponent } from '../app/block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HightlightDirective } from './hightlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    MoviesListComponent,
    HightlightDirective,
    DisplayMoviesDirective,
    SearchMoviesComponent,
  ],
  imports: [BrowserModule, FormsModule, CardModule, ReactiveFormsModule],
  providers: [NgModule, CardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
