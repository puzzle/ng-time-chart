import {Item} from './item';
import {Period} from './period';
import {MomentUtilities} from './moment-utilities';

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
    const startDate = MomentUtilities.getLatestStart(items);
    const endDate = MomentUtilities.getEarliestEnd(items);
    if (!startDate || !endDate) {
      return null;
    }
    return new Period(startDate, endDate);
  }


}
