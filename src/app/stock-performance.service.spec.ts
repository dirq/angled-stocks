import { TestBed } from '@angular/core/testing';

import { StockPerformanceService } from './stock-performance.service';

describe('StockPerformanceService', () => {
  let service: StockPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
