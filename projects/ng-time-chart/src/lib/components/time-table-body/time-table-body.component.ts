import {Component, Input, ViewChild} from '@angular/core';
import {Constants} from '../../constants';
import {Group} from '../../group';
import {Item} from '../../item';
import {Period} from '../../period';
import {LayoutSelectorService} from '../../layout/layout-selector.service';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';
import {DateTime} from 'luxon';

@Component({
  selector: 'ng-time-table-body',
  templateUrl: './time-table-body.component.html',
  styleUrls: ['./time-table-body.component.scss']
})
export class TimeTableBodyComponent {

  readonly DAY_WIDTH = Constants.DAY_WIDTH;
  readonly SIDEBAR_WIDTH = Constants.SIDEBAR_WIDTH;

  @Input()
  groups: Group[];

  @Input()
  period: Period;

  @Input()
  today: DateTime;

  @Input()
  durationInDays: number;

  @Input()
  layoutStrategy: LayoutStrategy;

  @ViewChild('todaymarker') todayMarker;


  constructor(readonly layoutSelectorService: LayoutSelectorService) {
    this.groups = [];
  }

  doLayout(items: Item[]): Item[][] {
    return this.layoutSelectorService.doLayout(items, this.layoutStrategy);
  }

  getDayOfPeriod(date: DateTime): number {
    if (!this.period.containsDate(date)) {
      return 0;
    }
    return Math.round(date.diff(this.period.startDate, 'days').as('days')) - 1;
  }

  isInPeriod(time: DateTime): boolean {
    if (this.period) {
      return this.period.containsDate(time);
    } else {
      return false;
    }
  }


  open(group: Group) {
    group.onClick?.apply(null);
  }
}
