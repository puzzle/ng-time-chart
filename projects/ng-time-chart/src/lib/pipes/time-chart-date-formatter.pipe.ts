import {Pipe, PipeTransform} from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'timeChartDateFormatter'
})

export class TimeChartDateFormatterPipe implements PipeTransform {

  transform(dateString: (string | DateTime)): any {
    return new DateTime(dateString).toFormat('D. M.');
  }

}
