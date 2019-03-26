import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineComponent } from './ng-timeline.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TimelineDateFormatterPipe } from './pipes/timeline-date-formatter.pipe';

describe('NgTimelineComponent', () => {
  let component: NgTimelineComponent;
  let fixture: ComponentFixture<NgTimelineComponent>;

  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTimelineComponent,
        TimelineDateFormatterPipe],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
