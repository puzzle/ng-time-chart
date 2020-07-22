import {Injectable} from '@angular/core';
import {LayoutService} from './layout.service';
import {Item} from '../item';

@Injectable({
  providedIn: 'root'
})
export class StackedLayoutService implements LayoutService {

  constructor() {
  }

  doLayout(items: Item[]): Item[][] {
    return items.map(item => [item]);
  }
}
