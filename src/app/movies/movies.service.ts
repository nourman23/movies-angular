import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import { IMovie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private productUrl = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

  constructor(private http : HttpClient) { }
  getMovies(): Observable<IMovie>{
    return this.http.get<IMovie>(this.productUrl);
  }
}
