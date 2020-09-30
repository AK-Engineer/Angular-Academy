import { from } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn : 'root'  //Instantiate a single instance of this service in the root injector and provide it in any class that asks for it 
})
export class MovieItemService {
    movies = [
        {
          id: 1,
          name: 'Firebug',
          medium: 'Series',
          category: 'Science Fiction',
          year: 2010,
          featured: true,
          isFavorite: false
        },
        {
          id: 2,
          name: 'The Small Tall',
          medium: 'Movies',
          category: 'Comedy',
          year: 2015,
          featured: false,
          isFavorite: true
        }, {
          id: 3,
          name: 'The Redemption',
          medium: 'Movies',
          category: 'Action',
          year: 2016,
          featured: true,
          isFavorite: false
        }, {
          id: 4,
          name: 'Hoopers',
          medium: 'Series',
          category: 'Drama',
          year: null,
          featured: false,
          isFavorite: true
        }, {
          id: 5,
          name: 'Happy Joe: Cheery Road',
          medium: 'Movies',
          category: 'Action',
          year: 2015,
          featured: false,
          isFavorite: false
        }, {
          id: 6,
          name: 'Arhs Movie',
          medium: 'Movies',
          category: 'Action',
          year: 2015,
          featured: true,
          isFavorite: false
        }
      ];

      get(){
          return this.movies;
      }
      add(movie){
          this.movies.push(movie);
      }
      delete(movie){
          const index = this.movies.indexOf(movie);
          if(index >= 0){
              this.movies.splice(index,1);
          }
      }
}