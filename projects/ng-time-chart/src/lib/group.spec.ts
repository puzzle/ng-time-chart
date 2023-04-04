import {Group} from './group';
import { DateTime } from 'luxon';

describe('group', () => {
  it('should calculate its duration based on its items', () => {
    const group0 = new Group('TestGroup0', [
      {
        name: 'TestItem0',
        startTime: DateTime('2020-02-12'),
        endTime: DateTime('2020-03-23')
      },
      {
        name: 'TestItem1',
        startTime: DateTime('2020-03-25'),
        endTime: DateTime('2020-03-30')
      },
      {
        name: 'TestItem2',
        startTime: DateTime('2020-04-01'),
        endTime: DateTime('2020-04-07')
      },
      {
        name: 'TestItem3',
        startTime: DateTime('2020-04-08'),
        endTime: DateTime('2020-04-12')
      },
      {
        name: 'TestItem4',
        startTime: DateTime('2020-04-02'),
        endTime: DateTime('2020-04-05')
      },
    ]);
    expect(group0.duration.startDate.isSame(DateTime('2020-02-12'), 'day'))
      .toBeTruthy(`Start date should be 2020-02-12 but was ${group0.duration.startDate}`);
    expect(group0.duration.endDate.isSame(DateTime('2020-04-12'), 'day'))
      .toBeTruthy(`End date should be 2020-04-12 but was ${group0.duration.endDate}`);
  });
});
