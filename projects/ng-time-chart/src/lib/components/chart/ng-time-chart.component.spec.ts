import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgTimeChartComponent} from './ng-time-chart.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TimeChartDateFormatterPipe} from '../../pipes/time-chart-date-formatter.pipe';
import {TimeTableBodyComponent} from '../time-table-body/time-table-body.component';
import {Component, ViewChild} from '@angular/core';
import {Period} from '../../period';
import {Group} from '../../group';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';
import {Item} from '../../item';
import {addMatchers, cold, initTestScheduler} from 'jasmine-marbles';
import { DateTime } from 'luxon';

const year:number = new Date().getFullYear();

describe('NgTimeChartComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testGroups: Group[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTimeChartComponent,
        TimeTableBodyComponent,
        TimeChartDateFormatterPipe,
        TestHostComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const item0: Item = {
      name: 'Testitem0',
      startTime: DateTime.fromISO(`${year}-03-01`),
      endTime: DateTime.fromISO(`${year}-03-15`)
    };
    const item1: Item = {
      name: 'TestItem1',
      startTime: DateTime.fromISO(`${year}-03-17`),
      endTime: DateTime.fromISO(`${year}-04-08`)
    };
    const item2: Item = {
      name: 'TestItem2',
      startTime: DateTime.fromISO(`${year}-04-09`),
      endTime: DateTime.fromISO(`${year}-05-20`)
    };

    const group = new Group('TestGroup0', [item0, item1, item2]);
    testGroups = [group];

    fixture = TestBed.createComponent(TestHostComponent);
    initTestScheduler();
    addMatchers();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enumerate months', () => {
    const period = new Period(DateTime.fromISO(`2020-01-01`), DateTime.fromISO(`2020-12-31`));
    const months = NgTimeChartComponent.enumerateMonths(period);
    expect(months.length).toEqual(12, 'Should enumerate 12 months');
    expect(Period.isSameDay(months[0].startDate,period.startDate))
      .toBeTruthy(`Expected first day of first month to be ${year}-01-01 but was ${months[0].startDate}`);
    expect(Period.isSameDay(months[11].endDate,period.endDate))
      .toBeTruthy(`Expected last day of last month to be ${year}-012-31 but was ${months[11].endDate}`);
  });

  it('should enumerate partial months', () => {
    const period = new Period(DateTime.fromISO(`${year}-07-01`), DateTime.fromISO(`${year}-08-02`));
    const months = NgTimeChartComponent.enumerateMonths(period);
    expect(months.length).toEqual(2);
    const august = months[1];
    expect(august.days).toEqual(2);
  });

  it('should handle empty periods when enumerating months', () => {
    const months = NgTimeChartComponent.enumerateMonths(null);
    expect(months).toBeNull();
  });

  it('should enumerate weeks', () => {
    const period = new Period(DateTime.fromISO(`2020-01-01`),DateTime.fromISO(`2020-12-31`));
    const weeks = NgTimeChartComponent.enumerateWeeks(period);
    expect(weeks.length).toEqual(53, 'Should enumerate 53 weeks');
    expect(Period.isSameDay(weeks[0].startDate,DateTime.fromISO(`2020-01-01`)))
      .toBeTruthy(`Expected first day of first week to be 2020-01-01 but was ${weeks[0].startDate}`);
    expect(Period.isSameDay(weeks[52].endDate,DateTime.fromISO(`2020-12-31`)))
      .toBeTruthy(`Expected last day of last week to be $2020-12-31 but was ${weeks[52].endDate}`);
  });

  it('should handle empty periods when enumerating weeks', () => {
    const weeks = NgTimeChartComponent.enumerateWeeks(null);
    expect(weeks).toBeNull();
  });

  it('should enumerate days', () => {
    const period = new Period(DateTime.fromISO(`2020-01-01`), DateTime.fromISO(`2020-12-31`));
    const days = NgTimeChartComponent.enumerateDays(period);
    expect(days.length).toEqual(366);
    expect(Period.isSameDay(days[0],DateTime.fromISO(`2020-01-01`)))
      .toBeTruthy(`Expected first day to be 2020-01-01 but was ${days[0]}`);
    expect(Period.isSameDay(days[days.length - 1],DateTime.fromISO(`2020-12-31`)))
      .toBeTruthy(`Expected last day to be 2020-12-31 but was ${days[days.length - 1]}`);
  });

  it('should handle empty periods when enumerating days', () => {
    const days = NgTimeChartComponent.enumerateDays(null);
    expect(days).toBeNull();
  });

  it('should handle period changes', () => {
    const startDates = cold('a', {a: DateTime.fromISO(`${year}-01-01`)});
    const endDates = cold('--a-b', {a: DateTime.fromISO(`${year}-01-20`), b: DateTime.fromISO(`${year}-01-24`)});
    startDates.subscribe(value => component.ngTimeChartComponent.startDate = value);
    endDates.subscribe(value => component.ngTimeChartComponent.endDate = value);
    expect(component.ngTimeChartComponent.durationInDays$)
      .toBeObservable(cold('a-b-c', {
        a: 366,
        b: 20,
        c: 24
      }));
  });

  it('should handle groups without any dates', () => {
    const groups = cold('a-',
      {
        a: testGroups
      });
    groups.subscribe(value => component.ngTimeChartComponent.groups = value);
    expect(component.ngTimeChartComponent.filteredGroups$)
      .toBeObservable(cold('a-',
        {
          a: testGroups
        }));
  });

  it('should be able to handle groups before dates', () => {
    const startDates = cold('--a-',
      {
        a: DateTime.fromISO(`${year}-01-01`),
      });
    const endDates = cold('---a',
      {a: DateTime.fromISO(`${year}-08-20`)});
    const groups = cold('a---',
      {
        a: testGroups
      });
    startDates.subscribe(value => component.ngTimeChartComponent.startDate = value);
    endDates.subscribe(value => component.ngTimeChartComponent.endDate = value);
    groups.subscribe(value => component.ngTimeChartComponent.groups = value);
    expect(component.ngTimeChartComponent.filteredGroups$)
      .toBeObservable(cold('a-aa',
        {
          a: testGroups
        }));
  });

  it('should update filtered items when adding new items', () => {
    const startDates = cold('a-----b',
      {
        a: DateTime.fromISO(`${year}-01-01`),
        b: DateTime.fromISO(`${year}-08-10`)
      });
    const endDates = cold('--a',
      {a: DateTime.fromISO(`${year}-08-20`)});
    const groups = cold('---a-b',
      {
        a: [],
        b: testGroups
      });
    startDates.subscribe(value => component.ngTimeChartComponent.startDate = value);
    endDates.subscribe(value => component.ngTimeChartComponent.endDate = value);
    groups.subscribe(value => component.ngTimeChartComponent.groups = value);
    expect(component.ngTimeChartComponent.filteredGroups$)
      .toBeObservable(cold('a-aa-bc',
        {
          a: [],
          b: testGroups,
          c: []
        }));
  });

  @Component({
    selector: 'ng-host-component',
    template: '<ng-time-chart [groups]="[]" [startDate]="startDate" [endDate]="endDate" [layoutStrategy]="strategy"></ng-time-chart>',
  })
  class TestHostComponent {
    @ViewChild(NgTimeChartComponent)
    public ngTimeChartComponent: NgTimeChartComponent;
    startDate = null;
    endDate = null;
    readonly strategy: LayoutStrategy = LayoutStrategy.Stacked;
  }
});
