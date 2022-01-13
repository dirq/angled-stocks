import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  StocksService,
  IStockResult,
  IPerformanceRecord,
} from '../../services/stocks.service';

interface IResult {
  date: string;
  closePrice: number;
  openPrice: number;
}

@Component({
  selector: 'stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss'],
})
export class StockSearchComponent implements OnInit {
  results: Array<IResult> = [];
  loading: Boolean = false;

  searchForm = new FormGroup({
    ticker: new FormControl('PRFT'),
  });

  constructor(private performanceService: StocksService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.loading = true;
    console.log(this.searchForm.value);
    this.performanceService
      .getPastPerformance(this.searchForm.value.ticker)
      .subscribe((x) => {
        if (!x.results) {
          this.results = [];
          return;
        }

        this.results = x.results.map((y) => {
          const date = new Date(y.t);
          date.setDate(date.getDate() + 1);

          return {
            date: date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
            openPrice: y.o,
            closePrice: y.c,
          };
        });

        this.loading = false;
      });
  }
}
