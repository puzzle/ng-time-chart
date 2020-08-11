import {NgModule} from '@angular/core';
import {NgTimeChartComponent} from './chart/ng-time-chart.component';
import {CommonModule} from '@angular/common';
import {TimeTableBodyComponent} from './time-table-body/time-table-body.component';
import {ItemGroupingComponent} from './item-grouping/item-grouping.component';
import {TimeChartDateFormatterPipe} from '../pipes/time-chart-date-formatter.pipe';
import {ItemComponent} from './item/item.component';

@NgModule({
  declarations: [
    TimeTableBodyComponent,
    ItemGroupingComponent,
    TimeChartDateFormatterPipe,
    ItemComponent,
    NgTimeChartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ItemComponent,
    TimeTableBodyComponent,
    ItemGroupingComponent,
    NgTimeChartComponent
  ]
})
export class NgTimeChartModule {
}
