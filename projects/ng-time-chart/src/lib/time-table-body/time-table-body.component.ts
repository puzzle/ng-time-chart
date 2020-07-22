import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Constants} from '../constants';
import * as moment_ from 'moment';
import {Group} from '../group';
import {Moment} from 'moment';
import {Item} from '../item';
import {Period} from '../period';
import {LayoutSelectorService, LayoutStrategy} from '../layout/layout-selector.service';

const moment = moment_;

@Component({
  selector: 'ng-time-table-body',
  templateUrl: './time-table-body.component.html',
  styleUrls: ['./time-table-body.component.scss']
})
export class TimeTableBodyComponent implements OnInit, AfterViewInit {

  readonly DAY_WIDTH = Constants.DAY_WIDTH;
  readonly SIDEBAR_WIDTH = Constants.SIDEBAR_WIDTH;

  @Input()
  groups: Group[];

  @Input()
  period: Period;

  @Input()
  today: moment_.Moment;

  @Input()
  days: moment_.Moment[];

  @Input()
  layoutStrategy: LayoutStrategy;

  @ViewChild('todaymarker') todayMarker;

  constructor(readonly layoutSelectorService: LayoutSelectorService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollTodayIntoView();
  }

  doLayout(items: Item[]): Item[][] {
    if (!this.layoutStrategy) {
      throw new ReferenceError('No strategy set!');
    }
    return this.layoutSelectorService.doLayout(items, this.layoutStrategy);
  }

  getDayOfPeriod(date: Moment): number {
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

  startsBeforePeriod(time: Moment): boolean {
    return !this.period.containsDate(time);
  }

  // TODO: Merge with startBeforePeriod and isInPeriod
  endsAfterPeriod(time: Moment): boolean {
    return !this.period.containsDate(time);
  }

  isInPeriod(time: Moment): boolean {
    return this.period.containsDate(time);
  }

  getDaysSince(referenceDate: string | Moment, date: string | Moment): number {
    const refDate = this.getStartDateInCurrentPeriod(moment(referenceDate));
    const myDate = this.getStartDateInCurrentPeriod(moment(date));
    return Math.ceil(myDate.diff(moment(refDate), 'days', true));
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

  open(group: Group) {
    group.onClick();
  }

  private scrollTodayIntoView() {
    if (!!this.todayMarker && this.isInPeriod(this.today)) {
      this.todayMarker.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    }
  }

  visibleInPeriod(itemGrouping: Item[]) {
    const earliestDate = itemGrouping.sort((a, b) => a.startTime.diff(b.startTime))[0].startTime;
    const latestDate = itemGrouping.sort((a, b) => b.endTime.diff(a.endTime))[0].endTime;
    if (this.isInPeriod(earliestDate) || this.isInPeriod(latestDate)) {
      return true;
    }
    return !(!this.isInPeriod(earliestDate) && !this.isInPeriod(latestDate));
  }
}
