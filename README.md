# NgTimeChart

* A library to display durations in a horizontally scrolling calendar. Similar to a Gantt-chart.
* Durations are part of groups and are displayed together
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
1. Register the NgTimlineModule

`import { NgTimeChartModule } from 'ng-time-chart';`

2. Use the component (ng-time-chart) in your component.
```angular2html
<ng-time-chart [groups]="groups">

</ng-time-chart>
```
