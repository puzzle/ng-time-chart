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

const moment = moment_;

describe('NgTimeChartComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

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
    fixture = TestBed.createComponent(TestHostComponent);
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

  @Component({
    selector: 'ng-host-component',
    template: '<ng-time-chart [groups]="groups" [startDate]="startDate" [endDate]="endDate" [layoutStrategy]="strategy"></ng-time-chart>',
  })
  class TestHostComponent {
    @ViewChild(NgTimeChartComponent)
    public ngTimeChartComponent: NgTimeChartComponent;
    readonly period: Period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    readonly groups: Group[] = [];
    startDate = null;
    endDate = null;
    readonly strategy: LayoutStrategy = LayoutStrategy.Stacked;

    setStartDate(date: moment_.Moment) {
      this.startDate = date;
    }

    setEndDate(date: moment_.Moment) {
      this.endDate = date;
    }
  }
});
