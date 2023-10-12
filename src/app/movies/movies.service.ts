import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import { IMovie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private productUrl = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1';
private apiUrl='';
  constructor(private http : HttpClient) { }
  getMovies(page: number): Observable<IMovie>{
    this.apiUrl = `${this.productUrl}&page=${page}`;
    return this.http.get<IMovie>(this.apiUrl);
  }
  getMovieById(id: number){
    return this.http.get(this.apiUrl).toPromise()
      .then((data: any) => {
        return data.results.find((movie: any) => movie.id === id);
      });
  }
}
