import { TestBed } from '@angular/core/testing';

import { LayoutSelectorService } from './layout-selector.service';

describe('LayoutSelectorService', () => {
  let service: LayoutSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
