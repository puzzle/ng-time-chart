import {Component} from '@angular/core';
import {Group} from '../../../ng-time-chart/src/lib/group';
import {LayoutStrategy} from '../../../ng-time-chart/src/lib/layout/layout-strategy.enum';
import { DateTime } from 'luxon';
import { Settings } from 'luxon';

@Component({
  selector: 'ng-tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  readonly currentYear = DateTime.local().year;

  title = 'NgTimeChartLibrary';

  groups: Group[];
  startDate = DateTime.fromISO(`${this.currentYear}-05-01`);
  endDate = DateTime.fromISO(`${this.currentYear}-08-31`);
  readonly tiledLayoutStrategy = LayoutStrategy.Tiled;
  readonly stackedLayoutStrategy = LayoutStrategy.Stacked;

  constructor() {
    Settings.defaultLocale = 'de-ch';
    this.groups = [
      new Group(
        'Testgroup 0',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-02-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-03-23`),
            class: 'type-b'
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-03-25`),
            endTime: DateTime.fromISO(`${this.currentYear}-03-30T01:30`),
            class: 'type-a',
            details: 'More information of Testitem 1',
            onClick: () => alert('I was clicked 😊')
          },
          {
            name: 'Testitem 2',
            startTime: DateTime.fromISO(`${this.currentYear}-04-01`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-07`),
            class: 'type-b'
          },
          {
            name: 'Testitem 3',
            startTime: DateTime.fromISO(`${this.currentYear}-04-08`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-12`),
            class: 'type-b'
          },
          {
            name: 'Testitem 4',
            startTime: DateTime.fromISO(`${this.currentYear}-04-02`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-05`),
            class: 'type-b',
            details: 'More information of Testitem 4. A lot of text to show how this is handled.'
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => alert('Group clicked')
      ),
      new Group(
        'Testgroup 1',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-02-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-05-23`),
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            class: 'type-c'
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-04-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-28T00:30`),
            details: 'Oh, there\'s a monkey in my pocket, And he\'s stealing all my change. His stare is blank and glassy, I suspect he\'s deranged 🐒',
            class: 'type-c',
            dates: [
              DateTime.fromISO(`${this.currentYear}-04-11`),
              DateTime.fromISO(`${this.currentYear}-04-12`),
              DateTime.fromISO(`${this.currentYear}-04-13`),
              DateTime.fromISO(`${this.currentYear}-04-14`),
              DateTime.fromISO(`${this.currentYear}-04-15`),
              DateTime.fromISO(`${this.currentYear}-04-16`),
              DateTime.fromISO(`${this.currentYear}-04-17`),
              DateTime.fromISO(`${this.currentYear}-04-18`),
              DateTime.fromISO(`${this.currentYear}-04-19`),
              DateTime.fromISO(`${this.currentYear}-04-20`),
              DateTime.fromISO(`${this.currentYear}-04-21`),
              DateTime.fromISO(`${this.currentYear}-04-22`),
              DateTime.fromISO(`${this.currentYear}-04-23`),
              DateTime.fromISO(`${this.currentYear}-04-24`),
              DateTime.fromISO(`${this.currentYear}-04-25`),
              DateTime.fromISO(`${this.currentYear}-04-26`),
              DateTime.fromISO(`${this.currentYear}-04-27`),
              DateTime.fromISO(`${this.currentYear}-04-28`)
            ]
          },
          {
            name: 'Testitem 2',
            startTime: DateTime.fromISO(`${this.currentYear}-10-08T22:00`),
            endTime: DateTime.fromISO(`${this.currentYear}-10-10T04:30`),
            class: 'type-b',
            dates: [
              DateTime.fromISO(`${this.currentYear}-10-08`),
              DateTime.fromISO(`${this.currentYear}-10-09`),
              DateTime.fromISO(`${this.currentYear}-10-10`)
            ]
          },
          {
            name: 'Testitem 3',
            startTime: DateTime.fromISO(`${this.currentYear}-10-11T00:01`),
            endTime: DateTime.fromISO(`${this.currentYear}-10-12T05:00`),
            class: 'type-b',
            dates: [
              DateTime.fromISO(`${this.currentYear}-10-11`),
              DateTime.fromISO(`${this.currentYear}-10-12`)
            ]
          },].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 2',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-06-12T08:23`),
            endTime: DateTime.fromISO(`${this.currentYear}-07-01T06:23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-08-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-09-02`)
          },
          {
            name: 'Testitem 3',
            startTime: DateTime.fromISO(`${this.currentYear}-07-01T08:23`),
            endTime: DateTime.fromISO(`${this.currentYear}-07-12T23:23`)
          },].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 3',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-09-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-10-23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-10-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-11-02`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 4',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-02-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-05-23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-12-11`),
            endTime: DateTime.fromISO(`${this.currentYear + 1}-03-02`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 5',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-03-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-03-23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-03-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-02`)
          },
          {
            name: 'Testitem 2',
            startTime: DateTime.fromISO(`${this.currentYear}-04-01`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-04`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 6',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-06-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-07-23`),
            class: 'type-c'
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-08-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-09-02`),
            class: 'type-a'
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 7',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-09-12`),
            endTime: DateTime.fromISO(`${this.currentYear - 1}-10-23`),
            class: 'my-class-a'
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 2}-10-11`),
            endTime: DateTime.fromISO(`${this.currentYear - 1}-11-02`),
            class: 'my-class-a'
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 8',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-02-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-04-23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-05-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-06-02`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 9',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-02-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-05-23`),
            dates: [
              DateTime.fromISO(`${this.currentYear}-04-11`),
              DateTime.fromISO(`${this.currentYear}-04-12`)
            ]
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear}-04-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-05-02`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 10',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-06-12`),
            endTime: DateTime.fromISO(`${this.currentYear}-07-23`),
            hideDateRangeInHeader: true,
            class: 'type-a',
            dates: [
              DateTime.fromISO(`${this.currentYear}-06-18`),
              DateTime.fromISO(`${this.currentYear}-06-19`),
              DateTime.fromISO(`${this.currentYear}-06-23`),
              DateTime.fromISO(`${this.currentYear}-06-24`)
            ]
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-08-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-06-02`),
            class: 'type-a'
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 11',
        [
          {
            name: 'Testitem 0',
            startTime: DateTime.fromISO(`${this.currentYear}-09-12`),
            endTime: DateTime.fromISO(`${this.currentYear + 1}-01-23`)
          },
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-10-11`),
            endTime: DateTime.fromISO(`${this.currentYear}-11-02`)
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 12',
        [
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-09-01T20:30:00`),
            endTime: DateTime.fromISO(`${this.currentYear + 1}-12-12T04:30:00`),
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
      new Group(
        'Testgroup 13',
        [
          {
            name: 'Testitem 1',
            startTime: DateTime.fromISO(`${this.currentYear - 1}-09-01T20:30:00`),
            endTime: DateTime.fromISO(`${this.currentYear - 1}-12-12T04:30:00`),
          },
          {
            name: 'Testitem 2',
            startTime: DateTime.fromISO(`${this.currentYear}-09-01T20:30:00`),
            endTime: DateTime.fromISO(`${this.currentYear}-12-12T04:30:00`),
          },
          {
            name: 'Testitem 3',
            startTime: DateTime.fromISO(`${this.currentYear + 1}-09-01T20:30:00`),
            endTime: DateTime.fromISO(`${this.currentYear + 1}-12-12T04:30:00`),
          }].sort((a, b) => a.startTime.diff(b.startTime).as('seconds')),
        () => console.log('clicked')
      ),
    ];
  }

  setStartDate(value: string) {
    this.startDate = (!!value && value.length > 0) ? DateTime.fromISO((value)) : null;
  }

  setEndDate(value: string) {
    this.endDate = (!!value && value.length > 0) ? DateTime.fromISO((value)) : null;
  }
}
