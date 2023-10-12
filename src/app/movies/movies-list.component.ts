import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service";
import { Subscription } from 'rxjs';
import { IMovie } from './movies';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})

export class MoviesListComponent implements OnInit, OnDestroy {
  pageTitle = 'Movies List';
  sub!: Subscription;
  errorMessage: string = '';
  movies: IMovie = { results: [] };
  filteredMovies: IMovie = { results: [] };
  currentPage = 1; // Default page


  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('setter');
    this.filteredMovies = this.performFilter(value)
  }


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  loadMovies() {
    this.sub = this.moviesService.getMovies(this.currentPage).subscribe({
      next: (movies) => {
        this.movies = movies;
        this.filteredMovies = this.movies;
        console.log(movies);
        
      },
      error: (err) => this.errorMessage = err,
      complete: () => console.log('complete')
    })
  }
  nextPage() {
    // Handle user clicking "Next" button
    this.currentPage++;
    this.loadMovies();
  }

  previousPage() {
    // Handle user clicking "Previous" button
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
    }
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


  onBtnClicked(message: string): void {
    this.pageTitle = 'Movies List: ' + message;
  }


  // note?:string;
  // email?:string;
  // name?:string;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

}
