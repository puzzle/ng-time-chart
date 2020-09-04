import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgTimeChartComponent} from './ng-time-chart.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TimeChartDateFormatterPipe} from '../../pipes/time-chart-date-formatter.pipe';
import * as moment_ from 'moment';
import {TimeTableBodyComponent} from '../time-table-body/time-table-body.component';
import {Component, ViewChild} from '@angular/core';
import {Period} from '../../period';
import {Group} from '../../group';
import {LayoutStrategy} from '../../layout/layout-strategy.enum';
import {Item} from '../../item';
import {addMatchers, cold, initTestScheduler} from 'jasmine-marbles';

const moment = moment_;

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
      startTime: moment('2020-03-01'),
      endTime: moment('2020-03-15')
    };
    const item1: Item = {
      name: 'TestItem1',
      startTime: moment('2020-03-17'),
      endTime: moment('2020-04-08')
    };
    const item2: Item = {
      name: 'TestItem2',
      startTime: moment('2020-04-09'),
      endTime: moment('2020-05-20')
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
    const period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    const months = NgTimeChartComponent.enumerateMonths(period);
    expect(months.length).toEqual(12, 'Should enumerate 12 months');
    expect(months[0].startDate.isSame(period.startDate, 'day'))
      .toBeTruthy(`Expected first day of first month to be 2020-01-01 but was ${months[0].startDate}`);
    expect(months[11].endDate.isSame(period.endDate, 'day'))
      .toBeTruthy(`Expected last day of last month to be 2020-012-31 but was ${months[11].endDate}`);
  });

  it('should handle empty periods when enumerating months', () => {
    const months = NgTimeChartComponent.enumerateMonths(null);
    expect(months).toBeNull();
  });

  it('should enumerate weeks', () => {
    const period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    const weeks = NgTimeChartComponent.enumerateWeeks(period);
    expect(weeks.length).toEqual(53, 'Should enumerate 53 weeks');
    expect(weeks[0].startDate.isSame(moment('2020-01-01'), 'day'))
      .toBeTruthy(`Expected first day of first week to be 2020-01-01 but was ${weeks[0].startDate}`);
    expect(weeks[52].endDate.isSame(moment('2020-12-31'), 'day'))
      .toBeTruthy(`Expected last day of last week to be 2020-12-31 but was ${weeks[52].endDate}`);
  });

  it('should handle empty periods when enumerating weeks', () => {
    const weeks = NgTimeChartComponent.enumerateWeeks(null);
    expect(weeks).toBeNull();
  });

  it('should enumerate days', () => {
    const period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    const days = NgTimeChartComponent.enumerateDays(period);
    expect(days.length).toEqual(366);
    expect(days[0].isSame(moment('2020-01-01'), 'day'))
      .toBeTruthy(`Expected first day to be 2020-01-01 but was ${days[0]}`);
    expect(days[days.length - 1].isSame(moment('2020-12-31'), 'day'))
      .toBeTruthy(`Expected last day to be 2020-12-31 but was ${days[days.length - 1]}`);
  });

  it('should handle empty periods when enumerating days', () => {
    const days = NgTimeChartComponent.enumerateDays(null);
    expect(days).toBeNull();
  });

  it('should handle period changes', () => {
    const startDates = cold('a', {a: moment('2020-01-01')});
    const endDates = cold('--a-b', {a: moment('2020-01-20'), b: moment('2020-01-24')});
    startDates.subscribe(value => component.ngTimeChartComponent.startDate = value);
    endDates.subscribe(value => component.ngTimeChartComponent.endDate = value);
    expect(component.ngTimeChartComponent.durationInDays$)
      .toBeObservable(cold('a-b-c', {
        a: 367,
        b: 20,
        c: 24
      }));
  });

  it('should update filtered items when adding new items', () => {
    const startDates = cold('a-----b',
      {
        a: moment('2020-01-01'),
        b: moment('2020-08-10')
      });
    const endDates = cold('--a',
      {a: moment('2020-08-20')});
    const groups = cold('---a-b',
      {
        a: [],
        b: testGroups
      });
    startDates.subscribe(value => component.ngTimeChartComponent.startDate = value);
    endDates.subscribe(value => component.ngTimeChartComponent.endDate = value);
    groups.subscribe(value => component.ngTimeChartComponent.groups = value);
    expect(component.ngTimeChartComponent.filteredGroups$)
      .toBeObservable(cold('---a-bc',
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
