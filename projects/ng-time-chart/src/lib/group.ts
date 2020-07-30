import {Item} from './item';
import {Period} from './period';
import * as moment from 'moment';

export class Group {
  readonly name: string;
  readonly items: Item[];
  readonly duration?: Period;
  onClick?: () => void;

  public constructor(name: string, items: Item[], onClick = () => {
  }) {
    this.name = name;
    this.items = items;
    this.duration = Group.calculateDuration(items);
    this.onClick = onClick;
  }

  private static calculateDuration(items: Item[]) {
    const startDate = moment.min(items.map(item => item.startTime));
    const endDate = moment.max(items.map(item => item.endTime));
    if (!startDate || !endDate) {
      return null;
    }
    return new Period(startDate, endDate);
  }

}
