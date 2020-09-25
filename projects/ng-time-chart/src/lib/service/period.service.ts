import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {Period} from '../period';
import * as moment_ from 'moment';
import {map} from 'rxjs/operators';

const moment = moment_;

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
  private readonly _startDate$: Subject<moment_.Moment>;
  private readonly _endDate$: Subject<moment_.Moment>;


  /**
   * Set the start date of the period. If the parameter is null the start date will be calculated
   * @param date A momentjs date or null
   */
  set startDate(date: moment_.Moment) {
    this._startDate$.next(date);
  }

  /**
   * Set the end date of the period. If the parameter is null the end date will be  calculated.
   * @param date A momentjs date or null
   */
  set endDate(date: moment_.Moment) {
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
    const currentYear = moment();
    return new Period(
      currentYear.clone().startOf('year'),
      currentYear.clone().endOf('year')
    );
  }

  private static calculatePeriod(startDate: moment_.Moment, endDate: moment_.Moment): Period {
    if (startDate == null && endDate == null) {
      return null;
    }
    let myStartDate;
    if (startDate != null) {
      myStartDate = startDate;
    } else {
      myStartDate = endDate.clone();
      myStartDate.subtract(1, 'year');
    }

    let myEndDate;
    if (endDate != null) {
      myEndDate = endDate.clone();
    } else {
      myEndDate = myStartDate.clone();
      myEndDate.add(1, 'year');
    }
    return new Period(myStartDate, myEndDate);
  }
}
