import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment_ from 'moment';
import { map } from 'rxjs/operators';
import { Period } from './period';
import { Subject } from 'rxjs';
import { Moment } from 'moment';
import { Group } from './group';
import { Item } from './item';

const moment = moment_;

@Component({
  selector: 'ng-time-chart',
  templateUrl: './ng-time-chart.component.html',
  styleUrls: ['./ng-time-chart.component.scss', './ng-time-chart.component.print.scss']
})
export class NgTimeChartComponent implements OnInit {

  @Input()
  groups: Group[];

  @Input()
  startDate: moment_.Moment;

  @Input()
  endDate: moment_.Moment;

  @Output()
  yearChange: EventEmitter<number>;

  periodChange: Subject<Period>;

  months: moment_.Moment[];
  weeks: moment_.Moment[];
  days: moment_.Moment[];
  currentYear: number;
  period: Period;

  defaultColor = '#dead00';

  constructor() {
    this.yearChange = new EventEmitter<number>();
    this.periodChange = new Subject<Period>();
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

  private enumerateMonths(period: Period): moment_.Moment[] {
    function enumerate(currentDate: moment_.Moment, expanded: Moment[]) {
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
    function enumerate(currentDate: moment_.Moment, expanded: Moment[]) {
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
    if(month && month.month() === this.period.startDate.month() && month.year() === this.period.startDate.year()) {
      return month.daysInMonth() - this.period.startDate.date();
    } else if(month && month.month() === this.period.endDate.month() && month.year() === this.period.endDate.year()) {
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

  getDayOfPeriod(date: Moment): number {
    if (!this.period.containsDate(date)) {
      return 0;
    }
    return Math.round(date.diff(this.period.startDate, 'days', true));
  }

  getDaysSince(referenceDate: string, date: string): number {
     const refDate = this.getStartDateInCurrentPeriod(moment(referenceDate));
     const myDate = this.getStartDateInCurrentPeriod(moment(date));
  
     return Math.ceil(myDate.diff(moment(refDate), 'days', true));
  }

  getDuration(item: Item): number {
    const startDate = this.getStartDateInCurrentPeriod(item.startTime).hour(12);
    const endDate = this.getEndDateCurrentPeriod(item.endTime).hour(12);
    return Math.round(endDate.diff(startDate, 'days', true)) + 1;
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
    console.log('getOldPeriodDaysBeforeFirstWeek', weekStart, this.period.startDate, difference);
    return difference > 0 ? difference : 0;

  }

  isInPeriod(time: Moment): boolean {
    return this.period.containsDate(time);
  }

  startsBeforePeriod(time: Moment): boolean {
    return !this.period.containsDate(time);
  }

  // TODO: Merge with startBeforePeriod and isInPeriod
  endsAfterPeriod(time: Moment): boolean {
    return !this.period.containsDate(time);
  }

  changeYear(year: number) {
    this.yearChange.next(year);
    this.currentYear = year;
    if(this.startDate && this.endDate) {
      this.periodChange.next(new Period(this.startDate.hour(12), this.endDate.hour(23)));
    } else {
      this.periodChange.next(new Period(moment(`${year}-01-01`).hour(12), moment(`${year}-12-31`).hour(23)));
    }
  }

  open(group: Group) {
    group.onClick();
  }

  private getStartDateInCurrentPeriod(startDate: moment_.Moment) {
    const date = startDate.clone();
    if (date.isBefore(this.period.startDate)) {
      return this.period.startDate.clone();
    }
    return date;
  }

  private getEndDateCurrentPeriod(endDate: moment_.Moment) {
    const date = endDate.clone();
    if (date.isAfter(this.period.endDate)) {
      return this.period.endDate.clone();
    }
    return date;
  }
}
