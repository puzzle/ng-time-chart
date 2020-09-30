import {Injectable} from '@angular/core';
import * as moment_ from 'moment';
import {LayoutService} from './layout.service';
import {Item} from '../item';

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

  private static getStartDate(item: Item): moment_.Moment {
    return item.startTime.clone().startOf('day');
  }

  private static getEndDate(item: Item): moment_.Moment {
    return item.endTime.clone().endOf('day');
  }

  add(item: Item) {
    this.getFreeQueue(ItemOrder.getStartDate(item)).push(item);

  }

  private getFreeQueue(date: moment_.Moment): Item[] {
    if (this._queues.length === 0) {
      return this.createNewSubQueue();
    }

    const queuesWithFreeSpace = this._queues.filter(queue => ItemOrder.getEndDate(queue[queue.length - 1]).isBefore(date));
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
