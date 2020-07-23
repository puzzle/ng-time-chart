import {TestBed} from '@angular/core/testing';

import {StackedLayoutService} from './stacked-layout.service';
import * as moment from 'moment';
import {Item} from '../item';

describe('StackedLayoutService', () => {
  let service: StackedLayoutService;

  let simpleOrderItems: Item[];
  let item0: Item;
  let item2: Item;
  let item1: Item;

  beforeEach(() => {
    item0 = {
      name: 'Testitem0',
      startTime: moment('2020-03-01'),
      endTime: moment('2020-03-15')
    };
    item1 = {
      name: 'TestItem1',
      startTime: moment('2020-03-17'),
      endTime: moment('2020-04-08')
    };
    item2 = {
      name: 'TestItem2',
      startTime: moment('2020-04-09'),
      endTime: moment('2020-05-20')
    };

    simpleOrderItems = [item0, item2, item1];

    TestBed.configureTestingModule({});
    service = TestBed.inject(StackedLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should stack all items', () => {
    const ordered = service.doLayout(simpleOrderItems);
    expect(ordered.length).toEqual(3);
    expect(ordered[0][0]).toEqual(item0);
    expect(ordered[1][0]).toEqual(item2);
    expect(ordered[2][0]).toEqual(item1);
  });

  it('should handle empty lists', () => {
    const ordered = service.doLayout([]);
    expect(ordered.length).toEqual(0);
  });
});
