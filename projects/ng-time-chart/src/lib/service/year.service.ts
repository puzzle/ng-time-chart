import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Period} from '../period';
import * as moment_ from 'moment';
import {map} from 'rxjs/operators';

const moment = moment_;

@Injectable({
  providedIn: 'root'
})
export class YearService {

  private readonly _year$: Subject<number>;
  private readonly _period$: Observable<Period>;

  set year(value: number) {
    this._year$.next(value);
  }

  get year$(): Observable<number> {
    return this._year$.asObservable();
  }

  get period$() {
    return this._period$;
  }

  private static periodForYear(year: number) {
    return Period.forYear(year);
  }

  constructor() {
    this._year$ = new BehaviorSubject<number>(moment().year());
    this._period$ = this._year$.pipe(map(year => YearService.periodForYear(year)));
  }
}
