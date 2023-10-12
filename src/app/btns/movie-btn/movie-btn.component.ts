import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'movie-btn',
  templateUrl: './movie-btn.component.html',
})
export class MovieBtnComponent {
  @Input() title: string ='';


  @Output() movieBtnClicked : EventEmitter<string>=new EventEmitter<string>();


  onClick():void{
    console.log(this.title);
    
    this.movieBtnClicked.emit(`the movie :  ${this.title}  !`);
}
}
