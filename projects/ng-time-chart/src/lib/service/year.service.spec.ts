import {TestBed} from '@angular/core/testing';

import {YearService} from './year.service';
import {cold} from 'jasmine-marbles';

import * as moment_ from 'moment';
import {Period} from '../period';

const moment = moment_;

describe('YearServiceService', () => {
  let service: YearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the current year by default', () => {
    expect(service.year$)
      .toBeObservable(cold('a-', {a: moment().year()}));
  });

  it('should emit a new year if it is passed in', () => {
    cold('--a-', {a: 2040})
      .subscribe(year => service.year = year);
    expect(service.year$)
      .toBeObservable(cold('a-b-', {a: moment().year(), b: 2040}));
  });

  it('should emit the period for the current year', () => {
    expect(service.period$)
      .toBeObservable(cold('a-', {a: Period.forYear(moment().year())}));
  });
});
