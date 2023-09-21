import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  displayMoviesList = false;

  showMovies() {
    this.displayMoviesList = true;
  }

  hideMovies() {
    this.displayMoviesList = false;
  }

  movies = [
    {
      name: 'Film 1',
      director: 'Réalisateur 1',
      imageLink: 'lien_de_limage1.jpg',
    },
    {
      name: 'Film 2',
      director: 'Réalisateur 2',
      imageLink: 'lien_de_limage2.jpg',
    },
    {
      name: 'Film 3',
      director: 'Réalisateur 3',
      imageLink: 'lien_de_limage3.jpg',
    },
    {
      name: 'Film 4',
      director: 'Réalisateur 4',
      imageLink: 'lien_de_limage4.jpg',
    },
    {
      name: 'Film 5',
      director: 'Réalisateur 5',
      imageLink: 'lien_de_limage5.jpg',
    },
    {
      name: 'Film 6',
      director: 'Réalisateur 6',
      imageLink: 'lien_de_limage6.jpg',
    },
  ];
}
