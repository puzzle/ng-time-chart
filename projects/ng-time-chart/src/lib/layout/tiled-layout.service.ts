import {Injectable} from '@angular/core';
import {LayoutService} from './layout.service';
import {Item} from '../item';
import { DateTime } from 'luxon';
import {Period} from '../period';

@Injectable({
  providedIn: 'root'
})
export class TiledLayoutService implements LayoutService {

  constructor() {
  }

  /**
   * Tries to layout items in the most compact way
   * @param items The {@link Item}s to lay out.
   */
  public doLayout(items: Item[]): Item[][] {
    const itemOrder = new ItemOrder();
    const sorted = items.sort((a, b) => a.startTime.diff(b.startTime));
    sorted.forEach(item => itemOrder.add(item));
    return itemOrder.queues;
  }
}

class ItemOrder {

  get queues(): Item[][] {
    return this._queues;
  }

  constructor() {
    this._queues = [];
  }
  private readonly _queues: Item[][];

  private static getStartDate(item: Item): DateTime {
    return item.startTime.startOf('day');
  }

  private static getEndDate(item: Item): DateTime {
    return item.endTime.endOf('day');
  }

  add(item: Item) {
    this.getFreeQueue(ItemOrder.getStartDate(item)).push(item);

  }

  private getFreeQueue(date: DateTime): Item[] {
    if (this._queues.length === 0) {
      return this.createNewSubQueue();
    }

    const queuesWithFreeSpace = this._queues.filter(queue => Period.isBefore(ItemOrder.getEndDate(queue[queue.length - 1]),date));
    if (queuesWithFreeSpace.length > 0) {
      return queuesWithFreeSpace[0];
    }

    return this.createNewSubQueue();
  }

  private createNewSubQueue(): Item[] {
    const myQueue: Item[] = [];
    this._queues.push(myQueue);
    return myQueue;
  }

}
