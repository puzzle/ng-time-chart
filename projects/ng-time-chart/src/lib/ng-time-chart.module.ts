import { NgModule } from '@angular/core';
import { NgTimeChartComponent } from './ng-time-chart.component';
import { CommonModule } from '@angular/common';
import { TimeChartDateFormatterPipe } from './pipes/time-chart-date-formatter.pipe';
import { TimeTableBodyComponent } from './time-table-body/time-table-body.component';

@NgModule({
  declarations: [
    NgTimeChartComponent,
    TimeChartDateFormatterPipe,
    TimeTableBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgTimeChartComponent
  ]
})
export class NgTimeChartModule {
}
