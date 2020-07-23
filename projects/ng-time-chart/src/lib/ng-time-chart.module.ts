import {NgModule} from '@angular/core';
import {NgTimeChartComponent} from './ng-time-chart.component';
import {CommonModule} from '@angular/common';
import {TimeTableBodyModule} from './time-table-body/time-table-body.module';

@NgModule({
  declarations: [
    NgTimeChartComponent
  ],
  imports: [
    CommonModule,
    TimeTableBodyModule
  ],
  exports: [
    NgTimeChartComponent
  ]
})
export class NgTimeChartModule {
}
