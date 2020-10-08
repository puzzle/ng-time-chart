import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../item';
import {Constants} from '../../constants';
import {Period} from '../../period';
import * as moment_ from 'moment';

const moment = moment_;

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

  isInPeriod(time: moment_.Moment): boolean {
    return this.period.containsDate(time);
  }

  getDayOfPeriod(date: moment_.Moment): number {
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

  isNotInPeriod(time: moment_.Moment): boolean {
    return !this.period.containsDate(time);
  }

  getDaysSince(referenceDate: string | moment_.Moment, date: string | moment_.Moment): number {
    const refDate = this.getStartDateInCurrentPeriod(moment(referenceDate)).startOf('day');
    const myDate = this.getStartDateInCurrentPeriod(moment(date)).startOf('day');
    return Math.ceil(myDate.diff(moment(refDate), 'days', true));
  }

  open(item: Item) {
    item.onClick?.apply(null);
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
