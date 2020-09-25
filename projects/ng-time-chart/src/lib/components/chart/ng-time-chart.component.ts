import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import * as moment_ from 'moment';
import {filter, map} from 'rxjs/operators';
import {Period} from '../../period';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {Group} from '../../group';
import {Constants} from '../../constants';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';
import {PeriodService} from '../../service/period.service';
import {YearService} from '../../service/year.service';

const moment = moment_;

@Component({
  selector: 'ng-time-chart',
  templateUrl: './ng-time-chart.component.html',
  styleUrls: ['./ng-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PeriodService,
    YearService]
})
export class NgTimeChartComponent implements AfterViewInit {

  private readonly _groups$: Subject<Group[]>;

  @Input()
  set groups(value: Group[]) {
    this._groups$.next(value);
  }

  readonly filteredGroups$: Observable<Group[]>;
  readonly currentPeriod$: Observable<Period>;

  @Input()
  set startDate(date: moment_.Moment) {
    this.periodService.startDate = date;
  }

  get startDate(): moment_.Moment {
    return this.periodService.startDate;
  }

  @Input()
  set endDate(date: moment_.Moment) {
    this.periodService.endDate = date;
  }

  get endDate(): moment_.Moment {
    return this.periodService.endDate;
  }

  get currentYear$(): Observable<number> {
    return this.yearService.year$;
  }

  @Input()
  layoutStrategy: LayoutStrategy;

  @Output()
  readonly yearChange: EventEmitter<number>;

  @ViewChild('todayMarker') todayMarker;

  readonly months$: Observable<Period[]>;
  readonly weeks$: Observable<Period[]>;
  readonly days$: Observable<moment_.Moment[]>;
  readonly durationInDays$: Observable<number>;
  readonly precedingPeriodDaysBeforeFirstWeek$: Observable<number>;
  readonly today: moment_.Moment;

  readonly DAY_WIDTH = Constants.DAY_WIDTH;

  constructor(public periodService: PeriodService,
              public yearService: YearService) {
    this.yearChange = new EventEmitter<number>();
    this.yearService.year$.subscribe(year => this.yearChange.emit(year));
    this._groups$ = new BehaviorSubject<Group[]>([]);
    this.today = moment();
    this.currentPeriod$ = combineLatest([this.periodService.period$, this.yearService.period$])
      .pipe(map(([period, year]) => period != null ? period : year),
        filter(period => period.isValid()));

    this.months$ = this.currentPeriod$.pipe(map(period => NgTimeChartComponent.enumerateMonths(period)));
    this.weeks$ = this.currentPeriod$.pipe(map(period => NgTimeChartComponent.enumerateWeeks(period)));
    this.days$ = this.currentPeriod$.pipe(map(period => NgTimeChartComponent.enumerateDays(period)));
    this.durationInDays$ = this.days$.pipe(map(days => days.length));
    this.precedingPeriodDaysBeforeFirstWeek$ = this.currentPeriod$.pipe(
      map(period => NgTimeChartComponent.getOldPeriodDaysBeforeFirstWeek(period))
    );

    this.filteredGroups$ = combineLatest([this.currentPeriod$, this._groups$])
      .pipe(map(([period, groups]) => groups.filter(group => period.overlaps(group.duration))));
  }


  private static getOldPeriodDaysBeforeFirstWeek(period: Period): number {
    if (!period.isValid()) {
      return 0;
    }
    if (period.startDate.isoWeekday() <= 4) {
      return 0;
    }
    const weekStart = period.startDate.clone().isoWeekday(1);
    if (!period.containsDate(weekStart)) {
      weekStart.add(1, 'week');
    }
    const difference = Math.ceil(weekStart.diff(period.startDate, 'days', true));
    return difference > 0 ? difference : 0;
  }

  static enumerateMonths(period: Period): Period[] {
    if (!period) {
      return null;
    }

    function getMonthWithinPeriod(dayInMonth: moment_.Moment): Period {
      const fullMonth = new Period(dayInMonth.clone().startOf('month'), dayInMonth.clone().endOf('month'));
      return fullMonth.intersect(myPeriod);
    }

    function enumerateWithinPeriod(startDate: moment_.Moment): Period[] {
      const months = [];
      let current = startDate.clone();
      while (myPeriod.containsDate(current)) {
        months.push(getMonthWithinPeriod(current));
        current = current.clone().add(1, 'month');
      }
      return months;
    }


    const myPeriod = new Period(period.startDate.clone().hour(0), period.endDate.clone().hour(23));
    return enumerateWithinPeriod(period.startDate.clone());
  }

  static enumerateWeeks(period: Period): Period[] {
    function enumerate(currentDate: moment_.Moment, expanded: Period[]): Period[] {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        const endDate = currentDate.clone().endOf('isoWeek');
        const startDate = currentDate.clone().startOf('isoWeek');
        const week = new Period(startDate, endDate);
        expanded.push(period.intersect(week));
        const advanceDate = currentDate.clone().add(1, 'week');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    function firstWeekInPeriod(): moment_.Moment {
      const date = period?.startDate.clone().isoWeekday(4);
      return period.containsDate(date) ? date : date.add(1, 'week');
    }

    return !period ? null : enumerate(firstWeekInPeriod(), []);
  }

  static enumerateDays(period: Period): moment_.Moment[] {
    function enumerate(currentDate: moment_.Moment, expanded: moment_.Moment[]) {
      if (currentDate.isSameOrBefore(period.endDate, 'day')) {
        expanded.push(currentDate);
        const advanceDate = currentDate.clone().add(1, 'day');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return !period ? null : enumerate(period.startDate.clone(), []);
  }

  ngAfterViewInit() {
    this.scrollTodayIntoView();
  }

  isToday(day: moment_.Moment): boolean {
    return this.today.isSame(day, 'day');
  }

  changeYear(year: number) {
    this.yearService.year = year;
  }

  showYearSpinner$(): Observable<boolean> {
    return this.periodService.isFullYear$;
  }

  private scrollTodayIntoView() {
    if (!!this.todayMarker) {
      this.todayMarker.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    }
  }
}
