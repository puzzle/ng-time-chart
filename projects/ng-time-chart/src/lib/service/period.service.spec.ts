import {TestBed} from '@angular/core/testing';

import {PeriodService} from './period.service';
import {cold} from 'jasmine-marbles';
import {Period} from '../period';
import { DateTime } from 'luxon';

describe('PeriodService', () => {
  let service: PeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodService);
  });

  it('should provide null as default period', () => {
    expect(service.period$)
      .toBeObservable(cold('a-',
        {
          a: null
        }));
  });

  it('Should provide a period of one year after start date', () => {
    const startDate = DateTime.fromISO('2008-03-02');
    const startDateObservable = cold('-a-', {a: startDate});
    service.period$.subscribe(p=>console.log("startdate of period: " + p.startDate.toISO()));
    //service.period$.subscribe(p=>console.log("enddate of period: " + p.endDate.toISO()));
    startDateObservable.subscribe(date => service.startDate = date);
    expect(service.period$)
      .toBeObservable(cold('ab-',
        {
          a: null,
          b: new Period(startDate, startDate.set({}).plus({ year: 1 }))
        }));
  });

  it('should provide a period of one year before the end date', () => {
    const endDate = DateTime.fromISO('2020-09-23');
    const endDateObservable = cold('-a-', {a: endDate});
    endDateObservable.subscribe(date => service.endDate = date);

    expect(service.period$)
      .toBeObservable(cold('ab-', {
        a: null,
        b: new Period(endDate.set({}).minus({ year: 1 }), endDate)
      }));
  });

  it('should provide the period between start and end date', () => {
    const startDate = DateTime.fromISO('2018-03-02');
    const endDate = DateTime.fromISO('2020-09-23');
    cold('-a--', {a: startDate})
      .subscribe(date => service.startDate = date);
    cold('--a-', {a: endDate})
      .subscribe(date => service.endDate = date);
    expect(service.period$)
      .toBeObservable(cold('abc-', {
        a: null,
        b: new Period(startDate, startDate.set({}).plus({ year: 1 })),
        c: new Period(startDate, endDate)
      }));
  });

  // it('should changed the period based on the year', () => {
  //   const yearsObservable = cold('a-b', {a: 2012, b: 2030});
  //   yearsObservable.subscribe(year => service.changeYear(year));
  //   expect(service.period$.pipe(map(period => period)))
  //     .toBeObservable(cold('a-b',
  //       {
  //         a: Period.forYear(2012),
  //         b: Period.forYear(2030)
  //       }));
  // });
});
