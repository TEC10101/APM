import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // convention is to prefix id with something to id as part of our app
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
`
//       <li><a [routerLink]="['/welcome']">Home</a></li>
//<li><a [routerLink]="['/products']">Product List</a></li>
})
export class AppComponent {
  pageTitle: string = '02 Angular Getting Started';
}