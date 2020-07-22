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
  private readonly _queues: Item[][];

  get queues(): Item[][] {
    return this._queues;
  }

  constructor() {
    this._queues = [];
  }

  add(item: Item) {
    this.getFreeQueue(item.startTime).push(item);

  }

  private getFreeQueue(date: moment_.Moment): Item[] {
    // FIXME: code duplication
    if (this._queues.length === 0) {
      const newQueue: Item[] = [];
      this._queues.push(newQueue);
      return newQueue;
    }

    const queuesWithFreeSpace = this._queues.filter(queue => queue[queue.length - 1].endTime.isBefore(date));
    if (queuesWithFreeSpace.length > 0) {
      return queuesWithFreeSpace[0];
    }

    const myQueue: Item[] = [];
    this._queues.push(myQueue);
    return myQueue;
  }

}
