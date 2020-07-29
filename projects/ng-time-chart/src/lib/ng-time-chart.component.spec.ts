import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgTimeChartComponent} from './ng-time-chart.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TimeChartDateFormatterPipe} from './pipes/time-chart-date-formatter.pipe';
import * as moment from 'moment';
import {TimeTableBodyComponent} from './time-table-body/time-table-body.component';
import {Component, ViewChild} from '@angular/core';
import {Period} from './period';
import {Group} from './group';
import {LayoutStrategy} from './layout/layout-strategy.enum';

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

  it('should change period with new start date', () => {
    component.setStartDate(moment('2020-04-23'));
    fixture.detectChanges();
    const days = component.ngTimeChartComponent.days;
    expect(moment('2020-04-23').isSame(days[0], 'day')).toBeTrue();
    expect(days.length).toEqual(366, 'Should generate 365 days');
    expect(moment('2021-04-23').isSame(days[days.length - 1], 'day'))
      .toBeTruthy(`${days[days.length - 1]} should be '2021-04-23'`);
  });

  it('should change period with new end date', () => {
    component.setEndDate(moment('2020-04-23'));
    fixture.detectChanges();
    const days = component.ngTimeChartComponent.days;
    expect(moment('2019-04-23').isSame(days[0], 'day'))
      .toBeTruthy(`${days[0]} should be '2019-04-23'`);
    expect(moment('2020-04-23').isSame(days[days.length - 1], 'day'))
      .toBeTruthy(`${days[days.length - 1]} should be '2020-04-23'`);
  });

  it('should use the current year if no start and end dates are set', ()=>{
    const days = component.ngTimeChartComponent.days;
    expect(moment('2020-01-01').isSame(days[0], 'day')).toBeTrue();
    expect(days.length).toEqual(366, 'Should generate 365 days');
    expect(moment('2020-12-31').isSame(days[days.length - 1], 'day'))
      .toBeTruthy(`${days[days.length - 1]} should be '2020-12-31'`);
  })

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

    setStartDate(date: moment.Moment) {
      this.startDate = date;
    }

    setEndDate(date: moment.Moment) {
      this.endDate = date;
    }
  }
});
