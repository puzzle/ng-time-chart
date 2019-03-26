import { NgModule } from '@angular/core';
import { NgTimelineComponent } from './ng-timeline.component';
import { CommonModule } from '@angular/common';
import { TimelineDateFormatterPipe } from './pipes/timeline-date-formatter.pipe';

@NgModule({
  declarations: [
    NgTimelineComponent,
    TimelineDateFormatterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgTimelineComponent
  ]
})
export class NgTimelineModule {
}
