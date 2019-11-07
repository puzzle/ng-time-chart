import { Period } from './period';
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

});
