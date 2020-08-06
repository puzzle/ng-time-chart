import {TestBed} from '@angular/core/testing';

import {TiledLayoutService} from './tiled-layout.service';
import * as moment_ from 'moment';
import {LayoutService} from './layout.service';
import {Item} from '../item';

const moment = moment_;

describe('TiledLayoutService', () => {
  let service: LayoutService;

  let simpleOrderItems: Item[];
  let complexOrderItems: Item[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiledLayoutService);
    const item0: Item = {
      name: 'Testitem0',
      startTime: moment('2020-03-01'),
      endTime: moment('2020-03-15')
    };
    const item1: Item = {
      name: 'TestItem1',
      startTime: moment('2020-03-17'),
      endTime: moment('2020-04-08')
    };
    const item2: Item = {
      name: 'TestItem2',
      startTime: moment('2020-04-09'),
      endTime: moment('2020-05-20')
    };
    const item3: Item = {
      name: 'TestItem3',
      startTime: moment('2020-05-21'),
      endTime: moment('2020-05-30')
    };
    const item4: Item = {
      name: 'TestItem4',
      startTime: moment('2020-02-20'),
      endTime: moment('2020-06-20')
    };
    simpleOrderItems = [item0, item2, item1];
    complexOrderItems = [item3, item2, item4, item2, item3, item0];
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
});
