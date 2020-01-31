import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // convention is to prefix id with something to id as part of our app
  template: `
  <div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
</div>
`
})
export class AppComponent {
  pageTitle: string = '02 Angular Getting Started';
}