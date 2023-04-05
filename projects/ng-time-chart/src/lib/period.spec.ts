import {Period} from './period';
import { DateTime } from 'luxon';

describe('period', () => {

  it('should calculate the number of weeks for precisely one week', () => {
    expect(new Period(DateTime.fromISO('2019-02-04'),DateTime.fromISO('2019-02-10')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks for one week with overhang at the end', () => {
    expect(new Period(DateTime.fromISO('2019-02-04'),DateTime.fromISO('2019-02-13')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks for one week with overhang at both sides', () => {
    expect(new Period(DateTime.fromISO('2019-02-01'),DateTime.fromISO('2019-02-13')).isoWeeks).toEqual(1);
  });

  it('should calculate the number of weeks in a february correctly', () => {
    expect(new Period(DateTime.fromISO('2019-02-01'),DateTime.fromISO('2019-02-28')).isoWeeks).toEqual(4);
  });
  it('should calculate the number of weeks in a period spanning two years correctly', () => {
    expect(new Period(DateTime.fromISO('2018-12-25'),DateTime.fromISO('2019-01-10')).isoWeeks).toEqual(3);
  });

  it('should calculate the number of weeks in a very short period', () => {
    expect(new Period(DateTime.fromISO('2019-01-09'),DateTime.fromISO('2019-01-10')).isoWeeks).toEqual(0);
  });

  it('should calculate the intersection with an other period', () => {
    const period0 = new Period(DateTime.fromISO('2020-01-01'),DateTime.fromISO('2020-06-30'));
    const period1 = new Period(DateTime.fromISO('2020-05-01'),DateTime.fromISO('2020-08-31'));
    const intersection = period0.intersect(period1);
    Period.isSameDay(intersection.startDate,DateTime.fromISO('2020-05-01'))
    expect(Period.isSameDay(intersection.startDate,DateTime.fromISO('2020-05-01')))
      .toBeTruthy(`Intersection start date should be 2020-05-01, but found ${intersection.startDate}`);
    expect(Period.isSameDay(intersection.endDate,DateTime.fromISO('2020-06-30')))
      .toBeTruthy(`Intersection end date should be 2020-06-30 but found ${intersection.endDate}`);
  });

  it('should not matter which order of periods are used to calculate the intersection', () => {
    const period0 = new Period(DateTime.fromISO('2020-01-01'),DateTime.fromISO('2020-06-30'));
    const period1 = new Period(DateTime.fromISO('2020-05-01'),DateTime.fromISO('2020-08-31'));
    const intersection = period1.intersect(period0);
    expect(Period.isSameDay(intersection.startDate,DateTime.fromISO('2020-05-01')))
      .toBeTruthy(`Intersection start date should be 2020-05-01, but found ${intersection.startDate}`);
    expect(Period.isSameDay(intersection.endDate,DateTime.fromISO('2020-06-30')))
      .toBeTruthy(`Intersection end date should be 2020-06-30 but found ${intersection.endDate}`);
  });

  it('should calculate no intersection if two periods have no overlap', () => {
    const period0 = new Period(DateTime.fromISO('2012-03-12'),DateTime.fromISO('2012-04-08'));
    const period1 = new Period(DateTime.fromISO('2012-05-20'),DateTime.fromISO('2012-07-12'));
    const intersection = period0.intersect(period1);
    expect(intersection).toBeNull('There should not be an intersection');
  });

  it('should handle a null start date', () => {
    const period = new Period(null,DateTime.fromISO('2030-02-12'));
    expect(period).not.toBeNull('null must be permissible for period start date');
    expect(period.isValid()).toBeFalse();
  });
});
