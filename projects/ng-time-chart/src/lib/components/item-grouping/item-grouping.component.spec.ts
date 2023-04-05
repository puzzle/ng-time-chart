import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DateTime } from 'luxon';
import {ItemGroupingComponent} from './item-grouping.component';
import {Component, ViewChild} from '@angular/core';
import {Period} from '../../period';
import {Item} from '../../item';
import {ItemComponent} from '../item/item.component';


describe('ItemGroupingComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let period: Period;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent, ItemGroupingComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    period = new Period(DateTime.fromISO('2020-01-01'), DateTime.fromISO('2020-12-31'));
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.period = period;
    expect(component).toBeTruthy();
  });

  it('should be visible when start is before and end is after the view period', () => {
    component.period = period;
    const item = {
      name: 'testItem',
      startTime: DateTime.fromISO('2019-06-08'),
      endTime: DateTime.fromISO('2021-06-08'),
    };
    expect(component.itemGroupingComponent.visibleInPeriod([item])).toBeTrue();
    expect(component).toBeTruthy();
  });


  @Component({
    selector: 'ng-host-component',
    template: '<ng-item-grouping [period]="period" [itemGrouping]="itemGrouping"></ng-item-grouping>'
  })
  class TestHostComponent {
    @ViewChild(ItemGroupingComponent)
    public itemGroupingComponent: ItemGroupingComponent;
    period: Period = new Period(DateTime.fromISO('2020-01-01'),DateTime.fromISO('2020-12-31'));
    itemGrouping: Item[] = [];
  }
});
