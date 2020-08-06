import {Period} from './period';
import * as moment_ from 'moment';

const moment = moment_;

describe('period', () => {

  it('should calculate the number of weeks for precisely one week', () => {
    expect(new Period(moment('2019-02-04'), moment('2019-02-10')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks for one week with overhang at the end', () => {
    expect(new Period(moment('2019-02-04'), moment('2019-02-13')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks for one week with overhang at both sides', () => {
    expect(new Period(moment('2019-02-01'), moment('2019-02-13')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks in a february correctly', () => {
    expect(new Period(moment('2019-02-01'), moment('2019-02-28')).isoWeeks).toEqual(4);
  });

  it('should calculate the number of weeks in a period spanning two years correctly', () => {
    expect(new Period(moment('2018-12-25'), moment('2019-01-10')).isoWeeks).toEqual(3);
  });

  it('should calculate the number of weeks in a very short period', () => {
    expect(new Period(moment('2019-01-09'), moment('2019-01-10')).isoWeeks).toEqual(0);
  });

  it('should calculate the intersection with an other period', () => {
    const period0 = new Period(moment('2020-01-01'), moment('2020-06-30'));
    const period1 = new Period(moment('2020-05-01'), moment('2020-08-31'));
    const intersection = period0.intersect(period1);
    expect(intersection.startDate.isSame(moment('2020-05-01'), 'day'))
      .toBeTruthy(`Intersection start date should be 2020-05-01, but found ${intersection.startDate}`);
    expect(intersection.endDate.isSame(moment('2020-06-30'), 'day'))
      .toBeTruthy(`Intersection end date should be 2020-06-30 but found ${intersection.endDate}`);
  });

  it('should not matter which order of periods are used to calculate the intersection', () => {
    const period0 = new Period(moment('2020-01-01'), moment('2020-06-30'));
    const period1 = new Period(moment('2020-05-01'), moment('2020-08-31'));
    const intersection = period1.intersect(period0);
    expect(intersection.startDate.isSame(moment('2020-05-01'), 'day'))
      .toBeTruthy(`Intersection start date should be 2020-05-01, but found ${intersection.startDate}`);
    expect(intersection.endDate.isSame(moment('2020-06-30'), 'day'))
      .toBeTruthy(`Intersection end date should be 2020-06-30 but found ${intersection.endDate}`);
  });

  it('should calculate no intersection if two periods have no overlap', () => {
    const period0 = new Period(moment('2012-03-12'), moment('2012-04-08'));
    const period1 = new Period(moment('2012-05-20'), moment('2012-07-12'));
    const intersection = period0.intersect(period1);
    expect(intersection).toBeNull('There should not be an intersection');
  });
});
