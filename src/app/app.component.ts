import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand ps-3">{{pageTitle}}</a>
      <ul class="nav nav-pills">
  <li routerLinkActive="active"><a class="nav-link text-black" routerLink="/welcome">Home</a></li>
<li routerLinkActive="active"><a class="nav-link text-black" routerLink="/movies">Movies</a></li>
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
