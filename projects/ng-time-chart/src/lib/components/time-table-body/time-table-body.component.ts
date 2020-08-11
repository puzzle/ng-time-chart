import {Component, Input, ViewChild} from '@angular/core';
import {Constants} from '../../constants';
import * as moment_ from 'moment';
import {Group} from '../../group';
import {Item} from '../../item';
import {Period} from '../../period';
import {LayoutSelectorService} from '../../layout/layout-selector.service';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';

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
  today: moment_.Moment;

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

  getDayOfPeriod(date: moment_.Moment): number {
    if (!this.period.containsDate(date)) {
      return 0;
    }
    return Math.round(date.diff(this.period.startDate, 'days', true));
  }

  isInPeriod(time: moment_.Moment): boolean {
    return this.period.containsDate(time);
  }

  open(group: Group) {
    group.onClick?.apply(null);
  }
}
