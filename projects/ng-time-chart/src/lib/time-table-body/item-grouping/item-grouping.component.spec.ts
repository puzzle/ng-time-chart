import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemGroupingComponent} from './item-grouping.component';
import {Component} from '@angular/core';
import {Period} from '../../period';
import {Item} from '../../item';
import * as moment_ from 'moment';

const moment = moment_;


describe('ItemGroupingComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let period: Period;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemGroupingComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.period = period;
    expect(component).toBeTruthy();
  });

  @Component({
    selector: 'ng-host-component',
    template: '<ng-item-grouping [period]="period" [itemGrouping]="itemGrouping"></ng-item-grouping>'
  })
  class TestHostComponent {
    period: Period = new Period(moment('2020-01-01'), moment('2020-12-31'));
    itemGrouping: Item[] = [];
  }
});
