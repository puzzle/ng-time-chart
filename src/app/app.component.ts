import { Component } from '@angular/core';
import { Group } from '../../projects/ng-timeline/src/lib/group';
import * as moment from 'moment';

@Component({
  selector: 'ng-tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgTimelineLibrary';

  groups: Group[];

  constructor() {
    this.groups = [
      {
        name: 'Testgroup 0',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-11-11'),
            endTime: moment('2019-02-02')
          }],
        onClick: () => console.log('clicked')
      }
    ];
  }
}
