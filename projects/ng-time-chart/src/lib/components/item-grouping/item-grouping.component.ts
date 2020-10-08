import {Component, Input} from '@angular/core';
import {Period} from '../../period';
import {Item} from '../../item';
import * as moment_ from 'moment';
import {max, min} from 'moment';

@Component({
  selector: 'ng-item-grouping',
  templateUrl: './item-grouping.component.html',
  styleUrls: ['./item-grouping.component.scss']
})
export class ItemGroupingComponent {

  @Input()
  period: Period;

  @Input()
  itemGrouping: Item[];

  constructor() {
  }

  isInPeriod(time: moment_.Moment): boolean {
    return this.period.containsDate(time);
  }

  open(item: Item) {
    item.onClick?.apply(null);
  }

  visibleInPeriod(itemGrouping: Item[]) {
    if (!itemGrouping || itemGrouping.length === 0) {
      return false;
    }
    const earliestDate = min(itemGrouping.map(item => item.startTime));
    const latestDate = max(itemGrouping.map(item => item.endTime));
    const groupingPeriod = new Period(earliestDate, latestDate);
    return this.isInPeriod(earliestDate) ||
      this.isInPeriod(latestDate) ||
      groupingPeriod.containsDate(this.period.startDate);
  }
}
