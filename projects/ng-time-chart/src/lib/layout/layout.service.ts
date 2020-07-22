import {Item} from '../item';

export interface LayoutService {
  /**
   * Layout {@see Item}s in a specific way
   * @param items The {@link Item}s to lay out.
   */
  doLayout(items: Item[]): Item[][];
}

