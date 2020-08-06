import * as moment_ from 'moment';

export interface Item {
  name: string;
  startTime: moment_.Moment;
  endTime: moment_.Moment;
  dates?: moment_.Moment[];
  class?: string;
  onClick?: () => void;
}
