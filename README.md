# NgTimelineLibrary

* A library to display durations in a horizontally scrolling calendar. Similar to a Gantt-chart.
* Durations are part of groups and are displayed together
* The library displays the duration of an entire year
  * The year can be advanced and regressed
* Library location: `projects/ng-timeline` directory of this repository
* It is developed using Angular >=6.0.0 and its newly introduced ng g library schematics.

## Examples/Demo
* A simple Example can be found under src/app directory of this repository.

## Installation
`npm i ng-timeline`

## Usage
1. Register the NgTimlineModule

`import { NgTimelineModule } from 'ng-timeline';`

2. Use the component (ng-timeline) in your component.
```angular2html
<ng-timeline [groups]="groups">

</ng-timeline>
```
