# NgTimeChart

* A library to display durations in a horizontally scrolling calendar. Similar to a Gantt-chart.
* Durations are part of groups and are displayed together
* Durations can have 'active' days which are displayed in a darker color
* Colors can be configured
* Durations are clickable and the function can be passed into the component
* The library displays the duration of an entire year
  * The year can be advanced and regressed
* Library location: `projects/ng-time-chart` directory of this repository
* It is developed using Angular >=6.0.0 and its newly introduced ng g library schematics.

## Examples/Demo
* A simple Example can be found under projects/ng-time-chart-showase directory of this repository.
* The example is deployed: [Demo Link](https://puzzle.github.io/ng-time-chart/)

## Installation
`npm i @puzzleitc/ng-time-chart`

## Usage
1. Register the NgTimeChartModule

`import { NgTimeChartModule } from 'ng-time-chart';`

2. Use the component (ng-time-chart) in your component.

2.1 create a group
```typescript
{
        name: 'Group',
        items: [
          {
            name: 'Timeframe with 4 active days and color set',
            startTime: moment('2019-02-12'),
            endTime: moment('2019-05-23').
            color: '#044BD9',
            dates: [
              moment('2019-03-18'),
              moment('2019-03-19'),
              moment('2019-03-23'),
              moment('2019-03-24')
            ]
          },
          {
            name: 'Timeframe in default color',
            startTime: moment('2018-12-11'),
            endTime: moment('2019-03-02')
          }
        ],
        onClick: () => console.log('clicked'),
      }
```

2.2 Add HTML Code
```angular2html
<ng-time-chart [groups]="groups">

</ng-time-chart>
```

`ng-time-chart` takes all the available space from the parent element. If wrapped in a smaller element vertical and horizontal scrolling is available


3. The visible period can be configured by setting endDate and startDate. Both dates have to be set. If dates are set, switching years is disabled.

```typescript
  startDate = moment('2019-10-10');
  endDate = moment('2020-03-10');
```

```angular2html
<ng-time-chart [groups]="groups" [startDate]="startDate" [endDate]="endDate">

</ng-time-chart>
```