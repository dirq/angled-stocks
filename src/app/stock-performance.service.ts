import { Injectable } from '@angular/core';
import { restClient } from "@polygon.io/client-js";
import { environment } from '../environments/environment';

const rest = restClient(environment.polygonApiKey);

@Injectable({
  providedIn: 'root',
})
export class StockPerformanceService {
  constructor() {}

  //polygon.io likes YYYY-MM-DD
  formatDate(date: Date){
    return date.toISOString().split('T')[0];
  }

  getPastPerformance(ticker: string) {
    //the past 90 days
    const to = new Date();
    const from = new Date(to);
    from.setDate(to.getDate() - 90);

    return rest.stocks.aggregates(ticker, 1, 'day', this.formatDate(from), this.formatDate(to) )
  }
}
