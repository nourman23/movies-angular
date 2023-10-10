import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieBtnComponent } from '../btns/movie-btn/movie-btn.component';



@NgModule({
  declarations: [
    MoviesListComponent ,
     MovieBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesListComponent }
      ]),
     
  ]
})
export class MoviesModule {}
