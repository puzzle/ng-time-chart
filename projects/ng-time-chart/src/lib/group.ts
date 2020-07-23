import {Item} from './item';

export interface Group {
  name: string;
  items: Item[];
  onClick?: () => void;
}
