import {Component, Input} from '@angular/core';
import {Period} from '../../period';
import {Item} from '../../item';
import { DateTime } from 'luxon';

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

  isInPeriod(time: DateTime): boolean {
    return this.period.containsDate(time);
  }

  open(item: Item) {
    item.onClick?.apply(null);
  }

  visibleInPeriod(itemGrouping: Item[]) {
    if (!itemGrouping || itemGrouping.length === 0) {
      return false;
    }
    const earliestDate = DateTime.min(...itemGrouping.map(item => item.startTime));
    const latestDate = DateTime.max(...itemGrouping.map(item => item.endTime));
    const groupingPeriod = new Period(earliestDate, latestDate);
    return this.isInPeriod(earliestDate) ||
      this.isInPeriod(latestDate) ||
      groupingPeriod.containsDate(this.period.startDate);
  }
}
