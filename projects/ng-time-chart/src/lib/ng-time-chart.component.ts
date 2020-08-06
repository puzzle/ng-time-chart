import {AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {filter, map} from 'rxjs/operators';
import {Period} from './period';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Group} from './group';
import {Constants} from './constants';
import {LayoutStrategy} from './layout/layout-strategy.enum';

@Component({
  selector: 'ng-time-chart',
  templateUrl: './ng-time-chart.component.html',
  styleUrls: ['./ng-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTimeChartComponent implements AfterContentInit, AfterViewInit {

  @Input()
  groups: Group[];
  filteredGroups$: Observable<Group[]>;

  @Input()
  set startDate(date: moment.Moment) {
    this._startDate = date;
    this.changePeriod(this._startDate, this._endDate);
  }

  get startDate(): moment.Moment {
    return this._startDate;
  }

  @Input()
  set endDate(date: moment.Moment) {
    this._endDate = date;
    this.changePeriod(this._startDate, this._endDate);
  }

  get endDate(): moment.Moment {
    return this._endDate;
  }

  @Input()
  layoutStrategy: LayoutStrategy;

  @Output()
  readonly yearChange: EventEmitter<number>;

  @ViewChild('todayMarker') todayMarker;

  readonly period$: Subject<Period>;

  private _startDate?: moment.Moment;
  private _endDate?: moment.Moment;

  readonly months$: Observable<Period[]>;
  readonly weeks$: Observable<Period[]>;
  readonly days$: Observable<moment.Moment[]>;
  readonly durationInDays$: Observable<number>;
  readonly precedingPeriodDaysBeforeFirstWeek$: Observable<number>;
  readonly today: moment.Moment;
  currentYear: number;

  readonly DAY_WIDTH = Constants.DAY_WIDTH;

  constructor() {
    this.yearChange = new EventEmitter<number>();
    this.period$ = new BehaviorSubject<Period>(new Period(this._startDate, this._endDate));
    this.today = moment();

    const periodChange$ = this.period$.asObservable().pipe(filter(period => period.isValid()));

    this.months$ = periodChange$.pipe(map(period => NgTimeChartComponent.enumerateMonths(period)));
    this.weeks$ = periodChange$.pipe(map(period => NgTimeChartComponent.enumerateWeeks(period)));
    this.days$ = periodChange$.pipe(map(period => NgTimeChartComponent.enumerateDays(period)));
    this.durationInDays$ = this.days$.pipe(map(days => days.length));
    this.precedingPeriodDaysBeforeFirstWeek$ = periodChange$.pipe(
      map(period => NgTimeChartComponent.getOldPeriodDaysBeforeFirstWeek(period))
    );

    this.filteredGroups$ = this.period$
      .pipe(map(period => this.groups.filter(group => period.overlaps(group.duration))));
  }


  private static getOldPeriodDaysBeforeFirstWeek(period: Period): number {
    if (!period.isValid()) {
      return 0;
    }
    if (period.startDate.isoWeekday() <= 4) {
      return 0;
    }
    const weekStart = period.startDate.clone().isoWeekday(1);
    if (!period.containsDate(weekStart)) {
      weekStart.add(1, 'week');
    }
    const difference = Math.ceil(weekStart.diff(period.startDate, 'days', true));
    return difference > 0 ? difference : 0;
  }

  static enumerateMonths(period: Period): Period[] {
    function enumerate(currentDate: moment.Moment, expanded: Period[]): Period[] {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        const endDate = currentDate.clone().endOf('month');
        expanded.push(new Period(currentDate, endDate));
        const advanceDate = currentDate.clone().add(1, 'month');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return !period ? null : enumerate(period.startDate.clone(), []);
  }

  static enumerateWeeks(period: Period): Period[] {
    function enumerate(currentDate: moment.Moment, expanded: Period[]): Period[] {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        const endDate = currentDate.clone().endOf('isoWeek');
        const startDate = currentDate.clone().startOf('isoWeek');
        const week = new Period(startDate, endDate);
        expanded.push(period.intersect(week));
        const advanceDate = currentDate.clone().add(1, 'week');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    function firstWeekInPeriod(): moment.Moment {
      const date = period?.startDate.clone().isoWeekday(4);
      return period.containsDate(date) ? date : date.add(1, 'week');
    }

    return !period ? null : enumerate(firstWeekInPeriod(), []);
  }

  static enumerateDays(period: Period): moment.Moment[] {
    function enumerate(currentDate: moment.Moment, expanded: moment.Moment[]) {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        expanded.push(currentDate);
        const advanceDate = currentDate.clone().add(1, 'day');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return !period ? null : enumerate(period.startDate.clone(), []);
  }

  ngAfterContentInit(): void {
    this.changeYear(moment().year());
  }

  ngAfterViewInit() {
    this.scrollTodayIntoView();
  }

  isToday(day: moment.Moment): boolean {
    return this.today.isSame(day, 'day');
  }

  changeYear(year: number) {
    this.yearChange.next(year);
    this.currentYear = year;
    if (!this._startDate && !this._endDate) {
      this.period$.next(new Period(moment(`${year}-01-01`).hour(12), moment(`${year}-12-31`).hour(23)));
    } else {
      this.changePeriod(this._startDate, this._endDate);
      this.period$.next(new Period(this._startDate.hour(12), this._endDate.hour(23)));
    }
  }

  private changePeriod(startDate: moment.Moment, endDate: moment.Moment) {
    if (startDate == null && endDate == null) {
      return;
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
      myEndDate = endDate;
    } else {
      myEndDate = myStartDate.clone();
      myEndDate.add(1, 'year');
    }
    this.period$.next(new Period(myStartDate.hour(0), myEndDate.hour(23)));
  }

  private scrollTodayIntoView() {
    if (!!this.todayMarker) {
      this.todayMarker.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    }
  }
}
