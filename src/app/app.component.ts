import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand ps-3">{{pageTitle}}</a>
      <ul class="nav nav-pills">
  <li><a class="nav-link" routerLink="/welcome">Home</a></li>
<li><a class="nav-link" routerLink="/movies">Movies</a></li>
</ul> 
  </nav>
  <div class="container mt-3">
    <router-outlet></router-outlet>
  </div>
  `

})
export class AppComponent {
  pageTitle = 'Movies project';
}
