import {Component} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de-ch';
import {Group, LayoutStrategy} from 'ng-time-chart';

@Component({
  selector: 'ng-tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly currentYear = moment().year();

  title = 'NgTimeChartLibrary';

  groups: Group[];
  startDate = moment(`${this.currentYear}-05-01`);
  endDate = moment(`${this.currentYear}-08-31`);
  readonly layoutStrategy = LayoutStrategy.Tiled;

  constructor() {
    moment.locale('de-ch');
    this.groups = [
      new Group(
        'Testgroup 0',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-02-12`),
            endTime: moment(`${this.currentYear}-03-23`),
            class: 'type-b'
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-03-25`),
            endTime: moment(`${this.currentYear}-03-30`),
            class: 'type-a',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: 'Testitem 2',
            startTime: moment(`${this.currentYear}-04-01`),
            endTime: moment(`${this.currentYear}-04-07`),
            class: 'type-b'
          },
          {
            name: 'Testitem 3',
            startTime: moment(`${this.currentYear}-04-08`),
            endTime: moment(`${this.currentYear}-04-12`),
            class: 'type-b'
          },
          {
            name: 'Testitem 4',
            startTime: moment(`${this.currentYear}-04-02`),
            endTime: moment(`${this.currentYear}-04-05`),
            class: 'type-b'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => alert('Group clicked')
      ),
      new Group(
        'Testgroup 1',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-02-12`),
            endTime: moment(`${this.currentYear}-05-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-04-11`),
            endTime: moment(`${this.currentYear}-05-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 2',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-06-12`),
            endTime: moment(`${this.currentYear}-07-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear - 1}-08-11`),
            endTime: moment(`${this.currentYear}-09-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 3',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-09-12`),
            endTime: moment(`${this.currentYear}-10-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-10-11`),
            endTime: moment(`${this.currentYear}-11-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 4',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-02-12`),
            endTime: moment(`${this.currentYear}-05-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-12-11`),
            endTime: moment(`${this.currentYear + 1}-03-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 5',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-03-12`),
            endTime: moment(`${this.currentYear}-03-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-03-11`),
            endTime: moment(`${this.currentYear}-04-02`)
          },
          {
            name: 'Testitem 2',
            startTime: moment(`${this.currentYear}-04-01`),
            endTime: moment(`${this.currentYear}-04-04`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 6',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-06-12`),
            endTime: moment(`${this.currentYear}-07-23`),
            class: 'type-c'
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear - 1}-08-11`),
            endTime: moment(`${this.currentYear}-09-02`),
            class: 'type-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 7',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear - 1}-09-12`),
            endTime: moment(`${this.currentYear - 1}-10-23`),
            class: 'my-class-a'
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear - 2}-10-11`),
            endTime: moment(`${this.currentYear - 1}-11-02`),
            class: 'my-class-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 8',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-02-12`),
            endTime: moment(`${this.currentYear}-04-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-05-11`),
            endTime: moment(`${this.currentYear}-06-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 9',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-02-12`),
            endTime: moment(`${this.currentYear}-05-23`),
            dates: [
              moment(`${this.currentYear}-04-11`),
              moment(`${this.currentYear}-04-12`)
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear}-04-11`),
            endTime: moment(`${this.currentYear}-05-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 10',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-06-12`),
            endTime: moment(`${this.currentYear}-07-23`),
            class: 'type-a',
            dates: [
              moment(`${this.currentYear}-06-18`),
              moment(`${this.currentYear}-06-19`),
              moment(`${this.currentYear}-06-23`),
              moment(`${this.currentYear}-06-24`)
            ]
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear - 1}-08-11`),
            endTime: moment(`${this.currentYear}-09-02`),
            class: 'type-a'
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 11',
        [
          {
            name: 'Testitem 0',
            startTime: moment(`${this.currentYear}-09-12`),
            endTime: moment(`2021-01-23`)
          },
          {
            name: 'Testitem 1',
            startTime: moment(`${this.currentYear - 1}-10-11`),
            endTime: moment(`${this.currentYear}-11-02`)
          }].sort((a, b) => moment.duration(a.startTime.diff(b.startTime)).asSeconds()),
        () => console.log('clicked')
      )
    ];
  }

  setStartDate(value: string) {
    this.startDate = (!!value && value.length > 0) ? moment((value)) : null;
  }

  setEndDate(value: string) {
    this.endDate = (!!value && value.length > 0) ? moment((value)) : null;
  }
}
