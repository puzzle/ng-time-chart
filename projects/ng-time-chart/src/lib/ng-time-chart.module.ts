import { NgModule } from '@angular/core';
import { NgTimeChartComponent } from './ng-time-chart.component';
import { CommonModule } from '@angular/common';
import { TimeChartDateFormatterPipe } from './pipes/time-chart-date-formatter.pipe';

@NgModule({
  declarations: [
    NgTimeChartComponent,
    TimeChartDateFormatterPipe
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
