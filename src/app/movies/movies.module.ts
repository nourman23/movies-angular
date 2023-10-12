import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieBtnComponent } from '../btns/movie-btn/movie-btn.component';
import { MovieDetailsComponent } from './movie-details.component';
import '@material/web/button/filled-button.js';



@NgModule({
  declarations: [
    MoviesListComponent ,
     MovieBtnComponent,
     MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesListComponent },
      { path: 'movie/:id', component: MovieDetailsComponent }
      ]),

     
  ]
})
export class MoviesModule {}
