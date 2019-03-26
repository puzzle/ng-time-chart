import * as moment from 'moment';

export interface Item {
  name: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
}
