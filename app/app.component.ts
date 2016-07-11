import { Component } from 'angular2/core';

@Component({
    selector: 'seed-app',
    template: `
        <h1>{{pageTitle}}</h1>
     `
})
export class AppComponent {
    pageTitle: string = 'Angular 2 Seed Project';
}
