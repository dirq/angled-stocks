import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPerformanceChartComponent } from './stock-performance-chart.component';

describe('StockPerformanceChartComponent', () => {
  let component: StockPerformanceChartComponent;
  let fixture: ComponentFixture<StockPerformanceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPerformanceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPerformanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
