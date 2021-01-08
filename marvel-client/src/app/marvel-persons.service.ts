import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import Person from './Person.model';

@Injectable({
  providedIn: 'root',
})
export class MarvelPersonsService {
  constructor(private http: HttpClient) {}

  getPersons(page: number, index: number) {
    return this.http.get<Person>(
      environment.back_url + '/marvel/getAll?nbr=' + page + '&index=' + index
    );
  }
}
