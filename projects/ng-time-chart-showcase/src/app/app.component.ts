import { Component } from '@angular/core';
import { Group } from '../../../ng-time-chart/src/public-api';
import * as moment from 'moment';

@Component({
  selector: 'ng-tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgTimeChartLibrary';

  groups: Group[];

  constructor() {
    moment.locale('de-ch');
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
            startTime: moment('2018-12-11'),
            endTime: moment('2019-03-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 2',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-04-11'),
            endTime: moment('2019-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 3',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-06-12'),
            endTime: moment('2019-07-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-08-11'),
            endTime: moment('2019-09-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 4',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-09-12'),
            endTime: moment('2019-10-23')
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
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-12-11'),
            endTime: moment('2019-03-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 6',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-04-11'),
            endTime: moment('2019-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 7',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-06-12'),
            endTime: moment('2019-07-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-08-11'),
            endTime: moment('2019-09-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 8',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-09-12'),
            endTime: moment('2019-10-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-10-11'),
            endTime: moment('2019-11-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 9',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-12-11'),
            endTime: moment('2019-03-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 10',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23'),
            dates: [
              moment('2019-04-11'),
              moment('2019-04-12')
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment('2019-04-11'),
            endTime: moment('2019-05-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 11',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-06-12'),
            endTime: moment('2019-07-23'),
            color: '#044BD9',
            dates: [
              moment('2019-06-18'),
              moment('2019-06-19'),
              moment('2019-06-23'),
              moment('2019-06-24')
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-08-11'),
            endTime: moment('2019-09-02'),
            color: '#D95284'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      },
      {
        name: 'Testgroup 12',
        items: [
          {
            name: 'Testitem 0',
            startTime: moment('2019-09-12'),
            endTime: moment('2019-10-23')
          },
          {
            name: 'Testitem 1',
            startTime: moment('2018-10-11'),
            endTime: moment('2019-11-02')
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        onClick: () => console.log('clicked')
      }
    ];
  }
}
