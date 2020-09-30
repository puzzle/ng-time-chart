import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';

import {ItemComponent} from './item.component';
import {Period} from '../../period';
import {Item} from '../../item';
import {TimeChartDateFormatterPipe} from '../../pipes/time-chart-date-formatter.pipe';
import * as moment_ from 'moment';

const moment = moment_;

describe('ItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeChartDateFormatterPipe, ItemComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the day of period correctly', () => {
    expect(component.itemComponent.getDayOfPeriod(moment('2020-10-08')))
      .toEqual(281);
  });

  it('should calculate the day of period with late time correctly', () => {
    expect(component.itemComponent.getDayOfPeriod(moment('2020-10-08T22:34')))
      .toEqual(281);
  });

  it('should calculate the day of period with early time correctly', () => {
    expect(component.itemComponent.getDayOfPeriod(moment('2020-10-08T00:12')))
      .toEqual(281);
  });

  @Component({
    selector: 'ng-host-component',
    template: '<ng-item [period]="period" [item]="item"></ng-item>'
  })
  class TestHostComponent {
    @ViewChild(ItemComponent)
    public itemComponent: ItemComponent;
    period: Period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    item: Item = {
      name: 'Testitem',
      details: 'This is a test item, it is not for sale',
      startTime: moment('2020-05-12'),
      endTime: moment('2020-05-20'),
      class: 'test-item'
    };
  }
});
