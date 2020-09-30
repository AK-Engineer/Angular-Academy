import { MovieItemService } from './movie-item.service';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.movie);
  }

  constructor(private movieItemService: MovieItemService) { }

  ngOnInit(): void {
  }

}
