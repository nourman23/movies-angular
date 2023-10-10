import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service";
import { Subscription } from 'rxjs';
import { IMovie } from './movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})

export class MoviesListComponent implements OnInit , OnDestroy{
  pageTitle = 'Movies List';
  sub!: Subscription;
  errorMessage: string = '';
  movies: IMovie = {results: [] };
  filteredMovies: IMovie = { results: [] };


  private _listFilter: string = '';
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      console.log('setter');
      this.filteredMovies = this.performFilter(value)
  }


  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.sub = this.moviesService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error: (err) => this.errorMessage = err,
      complete: () => console.log('complete')
    })

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
        }

      //   performFilter(filterBy: string): IMovie {
          
      //     filterBy = filterBy.toLocaleLowerCase();
      //     return this.movies.results.filter(
      //         (movie: IMovie) =>
      //         movie.title
      //                 .toLocaleLowerCase()
      //                 .includes(filterBy))
      // }

      performFilter(filterBy: string): IMovie {
        filterBy = filterBy.toLowerCase(); // Use toLowerCase() for consistency
        const filteredMovies: IMovie = {
          results: this.movies.results.filter((movie) =>
            movie.title.toLowerCase().includes(filterBy)
          ),
        };
        return filteredMovies;
      }
      
}
