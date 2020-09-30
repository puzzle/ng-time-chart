import * as moment_ from 'moment';

export interface Item {
  readonly name: string;
  details?: string;
  readonly startTime: moment_.Moment;
  readonly endTime: moment_.Moment;
  dates?: moment_.Moment[];
  class?: string;
  onClick?: () => void;
}
