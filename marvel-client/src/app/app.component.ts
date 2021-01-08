import { MarvelPersonsService } from './marvel-persons.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel-client';
  constructor(public marvelPersonsService: MarvelPersonsService) {
    this.marvelPersonsService
      .getPersons(0, 10)
      .toPromise()
      .then((persons) => {
        console.log(persons);
      });
  }
}
