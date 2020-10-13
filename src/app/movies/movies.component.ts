import { MessageService } from './../message.service';
import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  // onSelect(movie:Movie): void{
  //   this.selectedMovie = movie;
  //   // To add on messages
  //   this.messageService.add(`MoviesComponent: Selected movie id=${movie.id}`)
  // }
  // constructor(private movieService:MovieService) { }
  constructor(private movieService:MovieService,private messageService:MessageService) { }

  // getMovies(): void{
  //   this.movies = this.movieService.getMovies();
  // }
  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
        // On this observable take the movies array being emitted and set it to this.movies
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.movieService.addMovie({ title } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
