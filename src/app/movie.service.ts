import { MOVIES } from './mock-movies';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
// Import data async
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // constructor() { }
  constructor(private http: HttpClient,private messageService: MessageService) { }

  /** Log a MovieService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  private moviesUrl = 'api/movies';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // getMovies(): Movie[]{
  //   return MOVIES;
  // }
  // Observable for async data
  // getMovies(): Observable<Movie[]>{
  //   // Send message after fetching movies
  //   this.messageService.add('MovieService: fetched Movies');
  //   return of(MOVIES);
  // }

  /** GET heroes from the server */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
            .pipe(
              tap(_ => this.log('fetched movies')),
              catchError(this.handleError<Movie[]>('getMovies', []))
            );
  }
  /** GET movie by id. Will 404 if id not found */
  getMovie(id: number): Observable<Movie> {
    // TODO: send the message _after_ fetching the movie
    this.messageService.add(`MovieService: fetched movie id=${id}`);
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** PUT: update the movie on the server */
updateMovie(movie: Movie): Observable<any> {
  return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
    tap(_ => this.log(`updated movie id=${movie.id}`)),
    catchError(this.handleError<any>('updateMovie'))
  );
}

addMovie(movie: Movie): Observable<Movie> {
  return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
    tap((newMovie: Movie) => this.log(`added movie w/ id=${newMovie.id}`)),
    catchError(this.handleError<Movie>('addMovie'))
  );
}

/** DELETE: delete the movie from the server */
deleteMovie(movie: Movie | number): Observable<Movie> {
  const id = typeof movie === 'number' ? movie : movie.id;
  const url = `${this.moviesUrl}/${id}`;

  return this.http.delete<Movie>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted movie id=${id}`)),
    catchError(this.handleError<Movie>('deleteMovie'))
  );
}

/* GET movies whose name contains search term */
searchMovies(term: string): Observable<Movie[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found movies matching "${term}"`) :
       this.log(`no movies matching "${term}"`)),
    catchError(this.handleError<Movie[]>('searchMovies', []))
  );
}


}
