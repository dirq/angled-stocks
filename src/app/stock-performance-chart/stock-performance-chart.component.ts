import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'stock-performance-chart',
  templateUrl: './stock-performance-chart.component.html',
  styleUrls: ['./stock-performance-chart.component.scss'],
})
export class StockPerformanceChartComponent implements OnInit {
  stockInfoForm = new FormGroup({
    ticker: new FormControl('PRFT'),
  });

  search(){
    console.log(this.stockInfoForm.value)
  }
  constructor() {}

  ngOnInit(): void {}
}
