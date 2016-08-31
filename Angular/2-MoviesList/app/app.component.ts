import { Component } from '@angular/core';
import { FilmesCompoent } from './filmes.component'
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  <filmes></filmes>`,
  directives: [FilmesCompoent]
})
export class AppComponent { }
