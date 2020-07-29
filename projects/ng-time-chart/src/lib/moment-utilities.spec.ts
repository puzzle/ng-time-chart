import {MomentUtilities} from './moment-utilities';
import {Item} from './item';
import * as moment from 'moment';

describe('MomentUtilities', () => {
  it('should create an instance', () => {
    expect(new MomentUtilities()).toBeTruthy();
  });

  it('should select the latest start time', () => {
    const items: Item[] = [
      {
        name: 'TestItem 0',
        startTime: moment('2020-01-01'),
        endTime: moment('2020-01-10')
      },
      {
        name: 'TestItem 1',
        startTime: moment('2020-01-02'),
        endTime: moment('2020-01-21')
      }
      ,
      {
        name: 'TestItem 2',
        startTime: moment('2019-12-30'),
        endTime: moment('2020-01-21')
      }
      ,
      {
        name: 'TestItem 3',
        startTime: moment('2020-01-05'),
        endTime: moment('2020-01-09')
      }
    ];
    const latestStart = MomentUtilities.getLatestStart(items);
    expect(latestStart.isSame(moment('2020-01-05'))).toBeTrue();
  });

  it('should select the earliest end time', () => {
    const items: Item[] = [
      {
        name: 'TestItem 0',
        startTime: moment('2020-01-01'),
        endTime: moment('2020-01-10')
      },
      {
        name: 'TestItem 1',
        startTime: moment('2020-01-02'),
        endTime: moment('2020-01-21')
      }
      ,
      {
        name: 'TestItem 2',
        startTime: moment('2019-12-30'),
        endTime: moment('2020-01-01')
      }
      ,
      {
        name: 'TestItem 3',
        startTime: moment('2020-01-05'),
        endTime: moment('2020-01-09')
      }
    ];
    const earliestEnd = MomentUtilities.getEarliestEnd(items);
    expect(earliestEnd.isSame(moment('2020-01-01'), 'day'))
      .toBeTruthy(`Earliest end time should be 2020-01-01 instead of ${earliestEnd.toISOString()}`);
  });
});
