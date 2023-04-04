import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {Period} from '../period';
import {map} from 'rxjs/operators';
import { DateTime } from 'luxon';

/**
 * The service provides the current calendar period. It is specified:
 * <ul>
 *   <li>As the period between a start and end date if both are specified</li>
 *   <li>The duration of a year following the start date if no end date is specified</li>
 *   <li>The duration of a year preceding the end date if no start date is specified</li>
 *   <li>The full current year from jan 1st to dec 31 if neither start nor end date are specified</li>
 */
@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  private readonly _period$: Observable<Period>;
  private readonly _isFullYear$: Observable<boolean>;
  private readonly _startDate$: Subject<DateTime>;
  private readonly _endDate$: Subject<DateTime>;


  /**
   * Set the start date of the period. If the parameter is null the start date will be calculated
   * @param date A luxon date or null
   */
  set startDate(date: DateTime) {
    this._startDate$.next(date);
  }

  /**
   * Set the end date of the period. If the parameter is null the end date will be  calculated.
   * @param date A luxon date or null
   */
  set endDate(date: DateTime) {
    this._endDate$.next(date);
  }

  /**
   * The observable with the period between start- and end date or the current year if neither is passed.
   */
  public get period$(): Observable<Period> {
    return this._period$;
  }

  /**
   * Returns true if neither start nor end were given and the current year was picked instead.
   */
  public get isFullYear$(): Observable<boolean> {
    return this._isFullYear$;
  }

  constructor() {
    this._startDate$ = new BehaviorSubject(null);
    this._endDate$ = new BehaviorSubject(null);
    this._period$ = new BehaviorSubject(PeriodService.getCurrentYearPeriod());
    const startAndEnd$ = combineLatest([this._startDate$, this._endDate$]);
    this._isFullYear$ = startAndEnd$.pipe(map(([start, end]) => !start && !end));
    this._period$ = startAndEnd$.pipe(map(([start, end]) => PeriodService.calculatePeriod(start, end)));
  }

  private static getCurrentYearPeriod() {
    const currentYear = DateTime.now();
    return new Period(
      currentYear.startOf('year'),
      currentYear.endOf('year')
    );
  }

  private static calculatePeriod(startDate: DateTime, endDate: DateTime): Period {
    if (startDate == null && endDate == null) {
      return null;
    }
    let myStartDate;
    if (startDate != null) {
      myStartDate = startDate;
    } else {
      myStartDate = endDate;
      myStartDate.subtract(1, 'year');
    }

    let myEndDate;
    if (endDate != null) {
      myEndDate = endDate;
    } else {
      myEndDate = myStartDate;
      myEndDate.add(1, 'year');
    }
    return new Period(myStartDate, myEndDate);
  }
}
