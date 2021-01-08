import { MarvelPersonsService } from './marvel-persons.service';
import { Component } from '@angular/core';
import Person from './Person.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  persons: Array<Person> = [];
  title = 'marvel-client';
  currentPage: number = 0;
  constructor(public marvelPersonsService: MarvelPersonsService) {
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.persons = persons.data as Array<Person>;
      });
  }

  previousPage() {
    this.currentPage--;
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.persons = [];
        this.persons = persons.data as Array<Person>;
      });
  }
  nextPage() {
    this.currentPage++;
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.persons = [];
        this.persons = persons.data as Array<Person>;
      });
  }
}
