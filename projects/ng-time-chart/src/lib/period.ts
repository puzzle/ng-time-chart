import * as moment_ from 'moment';
import {max, min} from 'moment';

const moment = moment_;

export class Period {

  private readonly _startDate: moment_.Moment;
  private readonly _endDate: moment_.Moment;

  private static splitAtNewYear(period: Period): Period[] {
    const periods: Period[] = [];
    if (period.endDate.year() > period.startDate.year()) {
      periods.push(new Period(period.startDate.clone(), moment(`${period.startDate.year()}-12-31`)));
      periods.push(...Period.splitAtNewYear(new Period(moment(`${period.endDate.year()}-01-01`), period.endDate.clone())));
    } else {
      periods.push(period);
    }
    return periods;
  }

  constructor(startDate: moment_.Moment, endDate: moment_.Moment) {
    this._startDate = startDate?.clone();
    this._endDate = endDate?.clone();
  }

  static forYear(year: number): Period {
    const midYear = moment(`${year}-06-01`);
    return new Period(midYear.clone().startOf('year'), midYear.clone().endOf('year'));
  }

  get startDate(): moment_.Moment {
    return this._startDate;
  }

  get endDate(): moment_.Moment {
    return this._endDate;
  }

  get days(): number {
    return Math.ceil(this.endDate.diff(this.startDate, 'days', true));
  }

  get isoWeeks(): number {

    function countThursdays(period: Period) {
      let count = 0;
      const startDay = period.startDate.clone().isoWeekday(4);
      if (startDay.isBefore(period.startDate)) {
        startDay.add(7, 'days');
      }
      if (period.days >= 4) {
        while (startDay.isSameOrBefore(period.endDate, 'day')) {
          count++;
          startDay.add(7, 'days');
        }
      }
      return count;
    }

    const periods = Period.splitAtNewYear(this);
    return periods.map(p => countThursdays(p))
      .reduceRight((previousValue, currentValue) => previousValue + currentValue);
  }

  public isValid(): boolean {
    return !!this.startDate && !!this.endDate && this.startDate.isBefore(this.endDate);
  }

  public containsDate(date: moment.Moment): boolean {
    return date.isSameOrAfter(this.startDate) && date.isSameOrBefore(this.endDate);
  }

  public toString() {
    return `Period (${this.startDate} - ${this.endDate})`;
  }

  public overlaps(period: Period): boolean {
    return !!this.intersect(period);
  }

  intersect(period: Period): Period {
    const latestStart = max(this.startDate, period.startDate);
    const earliestEnd = min(this.endDate, period.endDate);
    if (!latestStart || !earliestEnd) {
      return null;
    }
    if (latestStart.isAfter(earliestEnd)) {
      return null;
    }
    return new Period(latestStart, earliestEnd);
  }

  public equals(period: Period) {
    return this.startDate.isSame(period.startDate) && this.endDate.isSame(period.endDate);
  }

}
