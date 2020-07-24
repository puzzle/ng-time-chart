import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment_ from 'moment';
import {map} from 'rxjs/operators';
import {Period} from './period';
import {Subject} from 'rxjs';
import {Group} from './group';
import {Constants} from './constants';
import {LayoutStrategy} from './layout/layout-strategy.enum';

const moment = moment_;

@Component({
  selector: 'ng-time-chart',
  templateUrl: './ng-time-chart.component.html',
  styleUrls: ['./ng-time-chart.component.scss']
})
export class NgTimeChartComponent implements OnInit {

  @Input()
  groups: Group[];


  @Input()
  set startDate(date: moment_.Moment) {
    this._startDate = date;
    this.changePeriod(this._startDate, this._endDate);
  }

  get startDate(): moment_.Moment {
    return this._startDate;
  }

  @Input()
  set endDate(date: moment_.Moment) {
    this._endDate = date;
    this.changePeriod(this._startDate, this._endDate);
  }

  get endDate(): moment_.Moment {
    return this._endDate;
  }

  @Input()
  layoutStrategy: LayoutStrategy;

  @Output()
  readonly yearChange: EventEmitter<number>;
  readonly periodChange: Subject<Period>;

  private _startDate?: moment_.Moment;
  private _endDate?: moment_.Moment;

  months: moment_.Moment[];
  weeks: moment_.Moment[];
  days: moment_.Moment[];
  readonly today: moment_.Moment;
  currentYear: number;
  period: Period;

  readonly DAY_WIDTH = Constants.DAY_WIDTH;

  constructor() {
    this.yearChange = new EventEmitter<number>();
    this.periodChange = new Subject<Period>();
    this.today = moment();
  }

  ngOnInit() {
    this.periodChange
      .subscribe(period => this.period = period);

    this.periodChange
      .pipe(map(period => this.enumerateMonths(period)))
      .subscribe(months => this.months = months);

    this.periodChange
      .pipe(map(period => this.enumerateWeeks(period)))
      .subscribe(weeks => this.weeks = weeks);

    this.periodChange
      .pipe(map(period => this.enumerateDays(period)))
      .subscribe(days => this.days = days);

    this.changeYear(moment().year());
  }

  isToday(day: moment_.Moment): boolean {
    if (!this.isInPeriod(this.today)) {
      return false;
    }
    return this.today.isSame(day, 'day');
  }

  private enumerateMonths(period: Period): moment_.Moment[] {
    function enumerate(currentDate: moment_.Moment, expanded: moment_.Moment[]) {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        expanded.push(currentDate.clone());
        const advanceDate = currentDate.clone().add(1, 'month');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return enumerate(period.startDate.clone(), []);
  }

  private enumerateWeeks(period: Period): moment_.Moment[] {
    function enumerate(currentDate: moment_.Moment, expanded: moment_.Moment[]) {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        expanded.push(currentDate.clone().isoWeekday(1));
        const advanceDate = currentDate.clone().add(1, 'week');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    function firstWeekInPeriod(): moment_.Moment {
      const date = period.startDate.clone().isoWeekday(4);
      return period.containsDate(date) ? date : date.add(1, 'week');
    }

    return enumerate(firstWeekInPeriod(), []);
  }

  private enumerateDays(period: Period): moment_.Moment[] {
    function enumerate(currentDate: moment_.Moment, expanded: moment_.Moment[]) {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        expanded.push(currentDate);
        const advanceDate = currentDate.clone().add(1, 'day');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return enumerate(period.startDate.clone(), []);
  }

  daysInMonth(month: any): number {
    if (month && month.month() === this.period.startDate.month() && month.year() === this.period.startDate.year()) {
      return month.daysInMonth() - this.period.startDate.date();
    } else if (month && month.month() === this.period.endDate.month() && month.year() === this.period.endDate.year()) {
      return this.period.endDate.date() + 1;
    } else {
      return month.daysInMonth();
    }
  }

  getLengthOfWeekInPeriod(week: moment_.Moment): number {
    if (this.period.containsWeek(week)) {
      return 7;
    }
    let firstDay = week.clone();
    if (!this.period.containsDate(firstDay)) {
      firstDay = this.period.startDate.clone();
    }
    let lastDay = week.clone().add(7, 'days');
    if (firstDay.isSameOrAfter(lastDay)) {
      return 0;
    }
    if (!this.period.containsDate(lastDay)) {
      lastDay = this.period.endDate.clone();
    }
    return Math.ceil(lastDay.diff(firstDay, 'days', true));
  }

  getOldPeriodDaysBeforeFirstWeek(): number {
    if (this.period.startDate.isoWeekday() <= 4) {
      return 0;
    }
    const weekStart = this.period.startDate.clone().isoWeekday(1);
    if (!this.period.containsDate(weekStart)) {
      weekStart.add(1, 'week');
    }
    const difference = Math.ceil(weekStart.diff(this.period.startDate, 'days', true));
    return difference > 0 ? difference : 0;
  }

  isInPeriod(time: moment_.Moment): boolean {
    return this.period.containsDate(time);
  }

  changeYear(year: number) {
    this.yearChange.next(year);
    this.currentYear = year;
    if (!this._startDate && !this._endDate) {
      this.periodChange.next(new Period(moment(`${year}-01-01`).hour(12), moment(`${year}-12-31`).hour(23)));
    } else {
      this.changePeriod(this._startDate, this._endDate);
      this.periodChange.next(new Period(this._startDate.hour(12), this._endDate.hour(23)));
    }
  }

  private changePeriod(startDate: moment_.Moment, endDate: moment_.Moment) {
    if (startDate == null && endDate == null) {
      console.log('start and endDate are null, nothing we can do here');
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
    this.periodChange.next(new Period(myStartDate.hour(12), myEndDate.hour(23)));
  }
}
