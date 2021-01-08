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
  incommingData: boolean = false;
  constructor(public marvelPersonsService: MarvelPersonsService) {
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.persons = persons.data.results as Array<Person>;
        console.log(this.persons);
      });
  }

  previousPage() {
    this.incommingData = true;
    this.currentPage--;
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.incommingData = false;
        this.persons = [];
        this.persons = persons.data.results as Array<Person>;
      });
  }
  nextPage() {
    this.incommingData = true;
    this.currentPage++;
    this.marvelPersonsService
      .getPersons(this.currentPage, 20)
      .toPromise()
      .then((persons: any) => {
        this.incommingData = false;
        this.persons = [];
        this.persons = persons.data.results as Array<Person>;
      });
  }
}
