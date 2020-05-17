import {TimeChartDateFormatterPipe} from './time-chart-date-formatter.pipe';

describe('TimeChartDateFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeChartDateFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format a date', () => {
    const pipe = new TimeChartDateFormatterPipe();
    expect(pipe.transform('2019-11-22')).toEqual('22. 11.');
  });
});
