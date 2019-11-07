import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTimeChartModule } from '../../../ng-time-chart/src/lib/ng-time-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTimeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
