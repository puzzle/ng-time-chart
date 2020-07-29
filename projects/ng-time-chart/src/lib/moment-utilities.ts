import {Item} from './item';

export class MomentUtilities {

  public static getLatestStart(items: Item[]) {
    if (!items || items.length === 0) {
      return null;
    }
    return items.sort((a, b) => a.startTime.diff(b.startTime))[items.length - 1].startTime;
  }

  public static getEarliestEnd(items: Item[]) {
    if (!items || items.length === 0) {
      return null;
    }
    return items.sort((a, b) => a.endTime.diff(b.endTime))[0].endTime;
  }
}
