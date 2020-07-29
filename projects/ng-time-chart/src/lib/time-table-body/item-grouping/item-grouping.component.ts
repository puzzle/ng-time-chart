import {Component, Input, OnInit} from '@angular/core';
import {Period} from '../../period';
import {Item} from '../../item';
import * as moment_ from 'moment';
import {Constants} from '../../constants';
import {MomentUtilities} from '../../moment-utilities';

const moment = moment_;

@Component({
  selector: 'ng-item-grouping',
  templateUrl: './item-grouping.component.html',
  styleUrls: ['./item-grouping.component.scss']
})
export class ItemGroupingComponent implements OnInit {

  readonly DAY_WIDTH = Constants.DAY_WIDTH;
  readonly SIDEBAR_WIDTH = Constants.SIDEBAR_WIDTH;

  @Input()
  period: Period;

  @Input()
  itemGrouping: Item[];

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

  visibleInPeriod(itemGrouping: Item[]) {
    if (!itemGrouping || itemGrouping.length === 0) {
      return false;
    }
    const earliestDate = MomentUtilities.getLatestStart(itemGrouping);
    const latestDate = MomentUtilities.getEarliestEnd(itemGrouping);
    if (this.isInPeriod(earliestDate) || this.isInPeriod(latestDate)) {
      return true;
    }
    return !(!this.isInPeriod(earliestDate) && !this.isInPeriod(latestDate));
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
