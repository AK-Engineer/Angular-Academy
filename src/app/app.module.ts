import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesListComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
