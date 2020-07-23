import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeTableBodyComponent} from './time-table-body.component';
import {ItemGroupingComponent} from './item-grouping/item-grouping.component';
import {TimeChartDateFormatterPipe} from '../pipes/time-chart-date-formatter.pipe';


@NgModule({
  declarations: [
    TimeTableBodyComponent,
    ItemGroupingComponent,
    TimeChartDateFormatterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeTableBodyComponent,
    ItemGroupingComponent
  ]
})
export class TimeTableBodyModule {
}
