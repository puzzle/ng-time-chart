import { DateTime } from 'luxon';
export class Period {

  private readonly _startDate: DateTime;
  private readonly _endDate: DateTime;

  private static splitAtNewYear(period: Period): Period[] {
    const periods: Period[] = [];
    if (period.endDate.year() > period.startDate.year()) {
      periods.push(new Period(period.startDate, DateTime(`${period.startDate.year()}-12-31`)));
      periods.push(...Period.splitAtNewYear(new Period(DateTime(`${period.endDate.year()}-01-01`), period.endDate)));
    } else {
      periods.push(period);
    }
    return periods;
  }

  constructor(startDate: DateTime, endDate: DateTime) {
    this._startDate = DateTime.fromMillis(startDate.toMillis());
    this._endDate = DateTime.fromMillis(endDate.toMillis());
  }

  static forYear(year: number): Period {
    const midYear = new DateTime(`${year}-06-01`);
    return new Period(midYear.startOf('year'), midYear.endOf('year'));
  }

  get startDate(): DateTime {
    return this._startDate;
  }

  get endDate(): DateTime {
    return this._endDate;
  }

  get days(): number {
    return Math.ceil(this.endDate.diff(this.startDate, 'days', true));
  }

  get isoWeeks(): number {

    function countThursdays(period: Period) {
      let count = 0;
      const startDay = period.startDate.isoWeekday(4);
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


  public static isSameOrBeforeDay(first:DateTime,second:DateTime):boolean{
    return DateTime.fromFormat(first.toISODate(),'dd-MM-yyyy').toMillis()<=DateTime.fromFormat(second.toISODate(),'dd-MM-yyyy').toMillis();
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
