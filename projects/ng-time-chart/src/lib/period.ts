import { DateTime } from 'luxon';
export class Period {

  private readonly _startDate: DateTime;
  private readonly _endDate: DateTime;

  private static splitAtNewYear(period: Period): Period[] {
    const periods: Period[] = [];
    if (period.endDate.year > period.startDate.year) {
      periods.push(new Period(period.startDate.set({}), DateTime.fromISO(`${period.startDate.year}-12-31`)));
      periods.push(...Period.splitAtNewYear(new Period(DateTime.fromISO(`${period.endDate.year}-01-01`), period.endDate.set({}))));
    } else {
      periods.push(period);
    }
    return periods;
  }

  constructor(startDate: DateTime, endDate: DateTime) {
    this._startDate = startDate?.set({});
    this._endDate = endDate?.set({});
  }

  static forYear(year: number): Period {
    const midYear = DateTime.fromISO(`${year}-06-01`);
    return new Period(midYear.set({}).startOf('year'), midYear.set({}).endOf('year'));
  }

  get startDate(): DateTime {
    return this._startDate;
  }

  get endDate(): DateTime {
    return this._endDate;
  }

  get days(): number {
    return Math.ceil(this.endDate.diff(this.startDate, 'days').as('days'));
  }

  get isoWeeks(): number {

    function countThursdays(period: Period) {
      let count = 0;
      let startDay = period.startDate.set({}).set({ weekday: 4 });
      if (Period.isBefore(startDay,period.startDate)) {
        startDay=startDay.plus({ days: 7 });
      }
      if (period.days >= 4) {
        while (Period.isSameOrBeforeDay(startDay,period.endDate)) {
          count++;
          startDay=startDay.plus({ days: 7 });
        }
      }
      return count;
    }

    const periods = Period.splitAtNewYear(this);
    return periods.map(p => countThursdays(p))
      .reduceRight((previousValue, currentValue) => previousValue + currentValue);
  }

  public isValid(): boolean {
    if(this._endDate instanceof DateTime && this._startDate instanceof DateTime){
      return !!this._startDate && !!this._endDate && this._startDate.toMillis() < this._endDate.toMillis()
    }else{
      return false;
    }
  }

  public containsDate(date: DateTime): boolean {
    return Period.isSameOrAfter(date,this.startDate) && Period.isSameOrBefore(date,this.endDate);
  }

  public toString() {
    return `Period (${this.startDate} - ${this.endDate})`;
  }

  public overlaps(period: Period): boolean {
    return !!this.intersect(period);
  }

  intersect(period: Period): Period {
    const latestStart = DateTime.max(this.startDate, period.startDate);
    const earliestEnd = DateTime.min(this.endDate, period.endDate);
    if (!latestStart || !earliestEnd) {
      return null;
    }
    if (Period.isAfter(latestStart,earliestEnd)) {
      return null;
    }
    return new Period(latestStart, earliestEnd);
  }

  public equals(period: Period) {
    return Period.isSame(this.startDate,period.startDate) && Period.isSame(this.endDate,period.endDate)
  }


  public static isSameDay(first:DateTime,second:DateTime):boolean{
    return DateTime.fromISO(first.toISODate()).toMillis()==DateTime.fromISO(second.toISODate()).toMillis();
  }
  public static isSameOrBeforeDay(first:DateTime,second:DateTime):boolean{
    return DateTime.fromISO(first.toISODate()).toMillis()<=DateTime.fromISO(second.toISODate()).toMillis();
  }
  public static isSameOrBefore(first:DateTime,second:DateTime):boolean{
    return first.toMillis()<=second.toMillis();
  }
  public static isSameOrAfter(first:DateTime,second:DateTime):boolean{
    return first.toMillis()>=second.toMillis();
  }
  public static isSame(first:DateTime,second:DateTime):boolean{
    return first.toMillis()==second.toMillis();
  }
  public static isBefore(first:DateTime,second:DateTime):boolean{
    return first.toMillis()<second.toMillis();
  }
  public static isAfter(first:DateTime,second:DateTime):boolean{
    return first.toMillis()>second.toMillis();
  }
}
