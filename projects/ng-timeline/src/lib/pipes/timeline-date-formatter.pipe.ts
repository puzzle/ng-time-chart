import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';
import 'moment/locale/de-ch';

const moment = moment_;

@Pipe({
  name: 'timelineDateFormatter'
})

export class TimelineDateFormatterPipe implements PipeTransform {

  transform(dateString: string, args?: any): any {
    const mlj: moment_.Moment = moment(dateString);
    return moment(dateString).locale('de-ch').format('D. M.');
  }

}
