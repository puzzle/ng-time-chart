import {Component} from '@angular/core';
import {Group} from '../../../ng-time-chart/src/lib/group';
import * as moment from 'moment';
import 'moment/locale/de-ch';

@Component({
  selector: 'ng-tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgTimeChartLibrary';

  groups: Group[];

  startDate = moment('2020-05-01');
  endDate = moment('2020-08-31');

  constructor() {
    moment.locale('de-ch');
    this.groups = [
      {
        name: 'Testgroup 0',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-05-23'),
            class: 'type-b'
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-12-11'),
            endTime: moment('2020-03-02'),
            class: 'type-b'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 2',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2020-04-11'),
            endTime: moment('2020-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 3',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-06-12'),
            endTime: moment('2020-07-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-08-11'),
            endTime: moment('2020-09-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 4',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-09-12'),
            endTime: moment('2020-10-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-10-11'),
            endTime: moment('2019-11-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 5',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2020-12-11'),
            endTime: moment('2021-03-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 6',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2020-04-11'),
            endTime: moment('2020-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 7',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-06-12'),
            endTime: moment('2020-07-23'),
            class: 'type-c'
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-08-11'),
            endTime: moment('2020-09-02'),
            class: 'type-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 8',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-09-12'),
            endTime: moment('2019-10-23'),
            class: 'my-class-a'
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-10-11'),
            endTime: moment('2019-11-02'),
            class: 'my-class-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 9',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-04-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2020-05-11'),
            endTime: moment('2020-06-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 10',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-02-12'),
            endTime: moment('2020-05-23'),
            dates: [
              moment('2020-04-11'),
              moment('2020-04-12')
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment('2020-04-11'),
            endTime: moment('2020-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 11',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-06-12'),
            endTime: moment('2020-07-23'),
            class: 'type-a',
            dates: [
              moment('2020-06-18'),
              moment('2020-06-19'),
              moment('2020-06-23'),
              moment('2020-06-24')
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-08-11'),
            endTime: moment('2020-09-02'),
            class: 'type-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 12',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2020-09-12'),
            endTime: moment('2021-01-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-10-11'),
            endTime: moment('2020-11-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      }
    ];
  }

  setStartDate(value: string) {
    this.startDate = (!!value && value.length > 0) ? moment((value)) : null;
  }

  setEndDate(value: string) {
    this.endDate = (!!value && value.length > 0) ? moment((value)) : null;
  }
}
