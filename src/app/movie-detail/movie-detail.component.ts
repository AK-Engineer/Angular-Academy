import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;
  // constructor() { }
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location:Location
  ) { }


  ngOnInit(): void {
    this.getMovie();
  }
  // Extract the id route parameter
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void{
    this.location.back();
  }
  save(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }

}
