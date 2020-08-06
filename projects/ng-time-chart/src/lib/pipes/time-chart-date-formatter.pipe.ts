import {Pipe, PipeTransform} from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Pipe({
  name: 'timeChartDateFormatter'
})

export class TimeChartDateFormatterPipe implements PipeTransform {

  transform(dateString: (string | moment_.Moment)): any {
    return moment(dateString).format('D. M.');
  }

}
