import { Component } from '@angular/core';
import { IMovie, IMovieDetails } from './movies';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent {
pageTitle = 'Movie Details';
movieInfo?:IMovieDetails;
sub!: Subscription;
constructor( private route: ActivatedRoute , private moviesService: MoviesService){    
}


ngOnInit(){
  const id = Number(this.route.snapshot.paramMap.get('id')) ;

 this.moviesService.getMovieById(id) // Replace 1 with the desired movie ID
      .then((movie: IMovieDetails) => {
        this.movieInfo = movie;
        console.log(this.movieInfo);
        
      });
}
}
