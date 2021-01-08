import { TestBed } from '@angular/core/testing';

import { MarvelPersonsService } from './marvel-persons.service';

describe('MarvelPersonsService', () => {
  let service: MarvelPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
