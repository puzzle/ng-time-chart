import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {Period} from '../../period';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {Group} from '../../group';
import {Constants} from '../../constants';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';
import {PeriodService} from '../../service/period.service';
import {YearService} from '../../service/year.service';
import { DateTime } from 'luxon';


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
  set startDate(date: DateTime) {
    this.periodService.startDate = date;
  }

  get startDate(): DateTime {
    return this.periodService.startDate;
  }

  @Input()
  set endDate(date: DateTime) {
    this.periodService.endDate = date;
  }

  get endDate(): DateTime {
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
  readonly days$: Observable<DateTime[]>;
  readonly durationInDays$: Observable<number>;
  readonly precedingPeriodDaysBeforeFirstWeek$: Observable<number>;
  readonly today: DateTime;

  readonly DAY_WIDTH = Constants.DAY_WIDTH;

  constructor(public periodService: PeriodService,
              public yearService: YearService) {
    this.yearChange = new EventEmitter<number>();
    this.yearService.year$.subscribe(year => this.yearChange.emit(year));
    this._groups$ = new BehaviorSubject<Group[]>([]);
    this.today = DateTime.local().set({ hour: 12 })
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
    if (period.startDate.weekday <= 4) {
      return 0;
    }
    const weekStart = period.startDate.set({}).set(({ weekday: 1 }));
    if (!period.containsDate(weekStart)) {
      weekStart.plus({ week: 1 })
    }
    const difference = Math.ceil(weekStart.diff(period.startDate, 'days', true));
    return difference > 0 ? difference : 0;
  }

  static enumerateMonths(period: Period): Period[] {
    if (!period) {
      return null;
    }

    function getMonthWithinPeriod(dayInMonth: DateTime): Period {
      const fullMonth = new Period(dayInMonth.set({}).startOf('month'), dayInMonth.set({}).endOf('month'));
      return fullMonth.intersect(myPeriod);
    }

    function enumerateWithinPeriod(startDate: DateTime): Period[] {
      const months = [];
      let current = startDate.set({});
      while (myPeriod.containsDate(current)) {
        months.push(getMonthWithinPeriod(current));
        current = current.set({}).plus({ month: 1 });
      }
      return months;
    }


    const myPeriod = new Period(period.startDate.set({}).set({ hour: 0 }), period.endDate.set({}).set({ hour: 23 }));
    return enumerateWithinPeriod(period.startDate.set({}));
  }

  static enumerateWeeks(period: Period): Period[] {
    function enumerate(currentDate: DateTime, expanded: Period[]): Period[] {
      if (Period.isSameOrBeforeDay(currentDate,period.endDate)) {
        const endDate = currentDate.set({}).endOf('isoWeek');
        const startDate = currentDate.set({}).startOf('isoWeek');
        const week = new Period(startDate, endDate);
        expanded.push(period.intersect(week));
        const advanceDate = currentDate.set({}).add(1, 'week');
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    function firstWeekInPeriod(): DateTime {
      const date = period?.startDate.set({}).set({ weekday: 4 })
      return period.containsDate(date) ? date : date.plus({ week: 1 });
    }

    return !period ? null : enumerate(firstWeekInPeriod(), []);
  }

  static enumerateDays(period: Period): DateTime[] {
    function enumerate(currentDate: DateTime, expanded: DateTime[]) {
      if (Period.isSameOrBeforeDay(currentDate,period.endDate)) {
        expanded.push(currentDate);
        const advanceDate = currentDate.set({}).plus({ days: 1 });
        enumerate(advanceDate, expanded);
      }
      return expanded;
    }

    return !period ? null : enumerate(period.startDate, []);
  }

  ngAfterViewInit() {
    this.scrollTodayIntoView();
  }

  isToday(day: DateTime): boolean {
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
