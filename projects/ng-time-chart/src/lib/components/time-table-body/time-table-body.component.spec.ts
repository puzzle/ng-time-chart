import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Component} from '@angular/core';
import {Item} from '../../item';
import {Period} from '../../period';
import {Group} from '../../group';
import {LayoutStrategy} from '../../../public-api';
import {TimeTableBodyComponent} from './time-table-body.component';
import {ItemGroupingComponent} from '../item-grouping/item-grouping.component';
import { DateTime } from 'luxon';

describe('TimeTableBodyComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let simpleOrderItems: Item[];
  let group: Group;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGroupingComponent, TimeTableBodyComponent, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    const item0: Item = {
      name: 'Testitem0',
      startTime: DateTime.fromISO('2020-03-01'),
      endTime: DateTime.fromISO('2020-03-15')
    };
    const item1: Item = {
      name: 'TestItem1',
      startTime: DateTime.fromISO('2020-03-17'),
      endTime: DateTime.fromISO('2020-04-08')
    };
    const item2: Item = {
      name: 'TestItem2',
      startTime: DateTime.fromISO('2020-04-09'),
      endTime: DateTime.fromISO('2020-05-20')
    };
    simpleOrderItems = [item0, item2, item1];
    group = {name: 'TestGroup', items: simpleOrderItems};

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector: 'ng-host-component',
    template: '<ng-time-table-body [period]="period" [groups]="groups" [today]="today" [layoutStrategy]="strategy"></ng-time-table-body>',
  })
  class TestHostComponent {
    readonly period: Period = new Period(DateTime.fromISO('2020-01-01'),DateTime.fromISO('2020-12-31'));
    readonly groups: Group[] = [group];
    readonly today: DateTime = DateTime.local();
    readonly days: DateTime[] = [];
    readonly strategy: LayoutStrategy = LayoutStrategy.Stacked;
  }
});
