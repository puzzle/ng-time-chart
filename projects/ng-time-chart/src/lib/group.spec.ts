import {Group} from './group';
import * as moment from 'moment';

describe('group', () => {
  it('should calculate its duration based on its items', () => {
    const group0 = new Group('TestGroup0', [
      {
        name: 'TestItem0',
        startTime: moment('2020-02-12'),
        endTime: moment('2020-03-23')
      },
      {
        name: 'TestItem1',
        startTime: moment('2020-03-25'),
        endTime: moment('2020-03-30')
      },
      {
        name: 'TestItem2',
        startTime: moment('2020-04-01'),
        endTime: moment('2020-04-07')
      },
      {
        name: 'TestItem3',
        startTime: moment('2020-04-08'),
        endTime: moment('2020-04-12')
      },
      {
        name: 'TestItem4',
        startTime: moment('2020-04-02'),
        endTime: moment('2020-04-05')
      },
    ]);
    expect(group0.duration.startDate.isSame(moment('2020-02-12'), 'day'))
      .toBeTruthy(`Start date should be 2020-02-12 but was ${group0.duration.startDate}`);
    expect(group0.duration.endDate.isSame(moment('2020-04-12'), 'day'))
      .toBeTruthy(`End date should be 2020-04-12 but was ${group0.duration.endDate}`);
  });
});
