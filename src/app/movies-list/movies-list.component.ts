import { MovieItemService } from './../movie-item/movie-item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies;

  constructor(private movieItemService: MovieItemService) { }

  ngOnInit(): void {
    this.movies = this.movieItemService.get();
  }

  onMovieItemDelete(movie){
    this.movieItemService.delete(movie);
  }

}
