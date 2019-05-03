import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/de-ch';

const moment = moment_;

@Pipe({
  name: 'timelineDateFormatter'
})

export class TimelineDateFormatterPipe implements PipeTransform {

  transform(dateString: string, args?: any): any {
    return moment(dateString).format('D. M.');
  }

}
