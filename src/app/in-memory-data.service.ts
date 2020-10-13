import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {id: 1,title: "Avatar",dateReleased: 2009,featured: true},
      {id: 2,title: "Transporter 3",dateReleased: 2008},
      {id: 3,title: "Scarface",dateReleased: 1983},
      {id: 4,title: "The Godfather 2",dateReleased: 1974},
      {id: 5,title: "Goodfellas",dateReleased: 1990},
      {id: 6,title: "The Irishman",dateReleased: 2019},
      {id: 7,title: "Donnie Brasco",dateReleased: 1997},
      {id: 8,title: "Creed",dateReleased: 2015},
      {id: 9,title: "Rocky 2",dateReleased: 1979},
      {id: 10,title: "Rambo: First Blood",dateReleased: 1982}
    ];

    return {movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}