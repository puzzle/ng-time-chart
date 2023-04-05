import {Group} from './group';
import { DateTime } from 'luxon';
import {Period} from './period';

describe('group', () => {
  it('should calculate its duration based on its items', () => {
    const group0 = new Group('TestGroup0', [
      {
        name: 'TestItem0',
        startTime: DateTime.fromISO('2020-02-12'),
        endTime: DateTime.fromISO('2020-03-23')
      },
      {
        name: 'TestItem1',
        startTime: DateTime.fromISO('2020-03-25'),
        endTime: DateTime.fromISO('2020-03-30')
      },
      {
        name: 'TestItem2',
        startTime: DateTime.fromISO('2020-04-01'),
        endTime: DateTime.fromISO('2020-04-07')
      },
      {
        name: 'TestItem3',
        startTime: DateTime.fromISO('2020-04-08'),
        endTime: DateTime.fromISO('2020-04-12')
      },
      {
        name: 'TestItem4',
        startTime: DateTime.fromISO('2020-04-02'),
        endTime: DateTime.fromISO('2020-04-05')
      },
    ]);
    expect(Period.isSameDay(group0.duration.startDate,DateTime.fromISO('2020-02-12')))
      .toBeTruthy(`Start date should be 2020-02-12 but was ${group0.duration.startDate}`);
    expect(Period.isSameDay(group0.duration.endDate,DateTime.fromISO('2020-04-12')))
      .toBeTruthy(`End date should be 2020-04-12 but was ${group0.duration.endDate}`);
  });
});
