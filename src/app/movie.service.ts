import { MOVIES } from './mock-movies';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
// Import data async
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // constructor() { }
  constructor(private messageService: MessageService) { }

  // getMovies(): Movie[]{
  //   return MOVIES;
  // }
  // Observable for async data
  getMovies(): Observable<Movie[]>{
    // Send message after fetching movies
    this.messageService.add('MovieService: fetched Heroes');
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`MovieService: fetched movie id=${id}`);
    return of(MOVIES.find(movie => movie.id === id));
  }


}
