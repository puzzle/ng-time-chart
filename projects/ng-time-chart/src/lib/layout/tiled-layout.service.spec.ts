import {TestBed} from '@angular/core/testing';

import {TiledLayoutService} from './tiled-layout.service';
import { DateTime } from 'luxon';
import {LayoutService} from './layout.service';
import {Item} from '../item';


describe('TiledLayoutService', () => {
  let service: LayoutService;

  let simpleOrderItems: Item[];
  let complexOrderItems: Item[];
  let stackOnSameDay: Item[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiledLayoutService);
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
    const item3: Item = {
      name: 'TestItem3',
      startTime: DateTime.fromISO('2020-05-21'),
      endTime: DateTime.fromISO('2020-05-30')
    };
    const item4: Item = {
      name: 'TestItem4',
      startTime: DateTime.fromISO('2020-02-20'),
      endTime: DateTime.fromISO('2020-06-20')
    };
    const item5: Item = {
      name: 'TestItem5',
      startTime: DateTime.fromISO('2020-08-20T08:00'),
      endTime: DateTime.fromISO('2020-08-21T08:00')
    };
    const item6: Item = {
      name: 'TestItem5',
      startTime: DateTime.fromISO('2020-08-21T09:00'),
      endTime: DateTime.fromISO('2020-08-25T22:00')
    };
    simpleOrderItems = [item0, item2, item1];
    complexOrderItems = [item3, item2, item4, item2, item3, item0];
    stackOnSameDay = [item5, item6];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should order items correctly', () => {
    const lainOut: Item[][] = service.doLayout(simpleOrderItems);
    expect(lainOut.length).toEqual(1);
  });

  it('should handle overlapping items', () => {
    const lainOut: Item[][] = service.doLayout(complexOrderItems);
    expect(lainOut.length).toEqual(3);
  });

  it('should stack items with only hours during the same day between them', () => {
    const lainOut: Item[][] = service.doLayout(stackOnSameDay);
    expect(lainOut.length).toEqual(2);
  });
});
