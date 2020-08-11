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

  isInPeriod(time: moment_.Moment): boolean {
    return this.period.containsDate(time);
  }

  getDayOfPeriod(date: moment_.Moment): number {
    if (!this.period.containsDate(date)) {
      return 0;
    }
    return Math.round(date.diff(this.period.startDate, 'days', true));
  }

  getDuration(item: Item): number {
    const startDate = this.getStartDateInCurrentPeriod(item.startTime).hour(12);
    const endDate = this.getEndDateCurrentPeriod(item.endTime).hour(12);
    return Math.round(endDate.diff(startDate, 'days', true)) + 1;
  }

  isNotInPeriod(time: moment_.Moment): boolean {
    return !this.period.containsDate(time);
  }

  getDaysSince(referenceDate: string | moment_.Moment, date: string | moment_.Moment): number {
    const refDate = this.getStartDateInCurrentPeriod(moment(referenceDate));
    const myDate = this.getStartDateInCurrentPeriod(moment(date));
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
