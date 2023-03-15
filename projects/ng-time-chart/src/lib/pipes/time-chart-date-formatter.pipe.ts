import {Pipe, PipeTransform} from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'timeChartDateFormatter'
})

export class TimeChartDateFormatterPipe implements PipeTransform {

  transform(dateString: (string | DateTime)): any {
    if(dateString instanceof DateTime){
      return dateString.toFormat('dd. MM.');
    }else{
      return DateTime.fromISO(dateString).toFormat('dd. MM.');
    }
  }

}
