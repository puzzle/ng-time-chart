import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimeChartComponent } from './ng-time-chart.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TimeChartDateFormatterPipe } from './pipes/time-chart-date-formatter.pipe';

describe('NgTimeChartComponent', () => {
  let component: NgTimeChartComponent;
  let fixture: ComponentFixture<NgTimeChartComponent>;

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTimeChartComponent,
        TimeChartDateFormatterPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimeChartComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
