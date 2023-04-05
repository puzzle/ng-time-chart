import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {ItemComponent} from './item.component';
import {Period} from '../../period';
import {Item} from '../../item';
import {TimeChartDateFormatterPipe} from '../../pipes/time-chart-date-formatter.pipe';
import { DateTime } from 'luxon';

describe('ItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemComponent,
        TimeChartDateFormatterPipe,
        TestHostComponent]
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
    expect(component.itemComponent.getDayOfPeriod(DateTime.fromISO('2020-10-08')))
      .toEqual(281);
  });

  it('should calculate the day of period with late time correctly', () => {
    expect(component.itemComponent.getDayOfPeriod(DateTime.fromISO('2020-10-08T23:34')))
      .toEqual(281);
  });

  it('should calculate the day of period with early time correctly', () => {
    expect(component.itemComponent.getDayOfPeriod(DateTime.fromISO('2020-10-08T00:00')))
      .toEqual(281);
  });

  it('should calculate the affected days since a date', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02'),DateTime.fromISO('2020-01-04')))
      .toEqual(2);
  });

  it('should calculate the days since a date with late time', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02T23:23'),DateTime.fromISO('2020-01-04')))
      .toEqual(2);
  });

  it('should calculate the days since a date with late time 2', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02'),DateTime.fromISO('2020-01-04T23:45')))
      .toEqual(2);
  });

  it('should calculate the days since a date with late time 3', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02T00:54'),DateTime.fromISO('2020-01-04T23:45')))
      .toEqual(2);
  });

  it('should calculate the days since a date with early time', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02T00:54'),DateTime.fromISO('2020-01-04T00:01')))
      .toEqual(2);
  });

  it('should calculate the days since a date with early time 2', () => {
    expect(component.itemComponent.getDaysSince(DateTime.fromISO('2020-01-02T23:54'),DateTime.fromISO('2020-01-04T00:01')))
      .toEqual(2);
  });

  it('should calculate the duration of an item 1', () => {
    const item = {
      name: 'testItem',
      startTime: DateTime.fromISO('2020-05-01'),
      endTime: DateTime.fromISO('2020-05-20'),
    };
    expect(component.itemComponent.getDuration(item))
      .toEqual(20);
  });

  it('should calculate the duration of an item 2', () => {
    const item = {
      name: 'testItem',
      startTime: DateTime.fromISO('2020-05-01T23:59'),
      endTime: DateTime.fromISO('2020-05-20T00:00'),
    };
    expect(component.itemComponent.getDuration(item))
      .toEqual(20);
  });

  it('should calculate the duration of an item 3', () => {
    const item = {
      name: 'testItem',
      startTime: DateTime.fromISO('2020-05-01T00:00'),
      endTime: DateTime.fromISO('2020-05-20T23:59'),
    };
    expect(component.itemComponent.getDuration(item))
      .toEqual(20);
  });

  it('should be visible when start is before and end is after the view period', () => {
    const item = {
      name: 'testItem',
      startTime: DateTime.fromISO('2019-05-01T00:00'),
      endTime: DateTime.fromISO('2021-05-20T23:59'),
    };
    expect(component.itemComponent.isVisible(item))
      .toBeTrue();
  });

  @Component({
    selector: 'ng-host-component',
    template: '<ng-item [period]="period" [item]="item"></ng-item>'
  })
  class TestHostComponent {
    @ViewChild(ItemComponent)
    public itemComponent: ItemComponent;
    period: Period = new Period(DateTime.fromISO('2020-01-01'), DateTime.fromISO('2020-12-31'));
    item: Item = {
      name: 'Testitem',
      details: 'This is a test item, it is not for sale',
      startTime: DateTime.fromISO('2020-05-12'),
      endTime: DateTime.fromISO('2020-05-20'),
      class: 'test-item'
    };
  }
});
