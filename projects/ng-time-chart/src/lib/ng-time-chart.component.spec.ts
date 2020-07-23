import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgTimeChartComponent} from './ng-time-chart.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TimeChartDateFormatterPipe} from './pipes/time-chart-date-formatter.pipe';
import * as moment from 'moment';
import {TimeTableBodyComponent} from './time-table-body/time-table-body.component';

describe('NgTimeChartComponent', () => {
  let component: NgTimeChartComponent;
  let fixture: ComponentFixture<NgTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTimeChartComponent,
        TimeTableBodyComponent,
        TimeChartDateFormatterPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change period with new start date', () => {
    component.startDate = moment('2020-04-23');
    expect(moment('2020-04-23').isSame(component.days[0], 'day')).toBeTrue();
    expect(moment('2021-04-23').isSame(component.days[component.days.length - 1], 'day')).toBeTrue();
  });

  it('should change period with new end date', () => {
    component.endDate = moment('2020-04-23');
    expect(moment('2019-04-23').isSame(component.days[0], 'day')).toBeTrue();
    expect(moment('2020-04-23').isSame(component.days[component.days.length - 1], 'day')).toBeTrue();
  });
});
