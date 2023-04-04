import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../item';
import {Constants} from '../../constants';
import {Period} from '../../period';
import { DateTime } from 'luxon';

@Component({
  selector: 'ng-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  readonly DAY_WIDTH = Constants.DAY_WIDTH;
  readonly SIDEBAR_WIDTH = Constants.SIDEBAR_WIDTH;

  @Input()
  period: Period;

  @Input()
  item: Item;

  constructor() {
  }

  ngOnInit(): void {
  }

  isVisible(item: Item) {
    return this.isInPeriod(item.startTime) ||
      this.isInPeriod(item.endTime) ||
      new Period(item.startTime, item.endTime).containsDate(this.period.startDate);
  }

  isInPeriod(time: DateTime): boolean {
    return this.period.containsDate(time);
  }

  getDayOfPeriod(date: DateTime): number {
    if (!this.period.containsDate(date)) {
      return 0;
    }
    return Math.floor(date.diff(this.period.startDate, 'days', true));
  }

  getDuration(item: Item): number {
    const startDate = this.getStartDateInCurrentPeriod(item.startTime).startOf('day');
    const endDate = this.getEndDateCurrentPeriod(item.endTime).endOf('day');
    return Math.ceil(endDate.diff(startDate, 'days', true));
  }

  isNotInPeriod(time: DateTime): boolean {
    return !this.period.containsDate(time);
  }

  getDaysSince(referenceDate: string | DateTime, date: string | DateTime): number {
    const refDate = this.getStartDateInCurrentPeriod(new DateTime(referenceDate)).startOf('day');
    const myDate = this.getStartDateInCurrentPeriod(new DateTime(date)).startOf('day');
    return Math.ceil(myDate.diff(new DateTime(refDate), 'days', true));
  }

  open(item: Item) {
    item.onClick?.apply(null);
  }

  private getStartDateInCurrentPeriod(startDate: DateTime) {
    if (Period.isBefore(startDate,this.period.startDate)) {
      return this.period.startDate;
    }
    return startDate;
  }

  private getEndDateCurrentPeriod(endDate: DateTime) {
    if (Period.isAfter(endDate,this.period.endDate)) {
      return this.period.endDate;
    }
    return endDate;
  }

}
