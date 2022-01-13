import { Injectable } from '@angular/core';
// import { polygonClient } from '@polygon.io/client-js';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface IStockResult {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results?: (IPerformanceRecord)[] | null;
  status: string;
  request_id: string;
  count: number;
}
export interface IPerformanceRecord {
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
}


@Injectable({
  providedIn: 'root',
})
export class StocksService {

  //private rest = restClient(environment.polygonApiKey);

  constructor(private http: HttpClient) {}

  //polygon.io likes YYYY-MM-DD
  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }

  getPastPerformance(ticker: string) {
    //the past 90 days
    const to = new Date();
    to.setDate(to.getDate() + 1);
    const from = new Date(to);
    from.setDate(to.getDate() - 90);

    const fromQuery = this.formatDate(from);
    const toQuery = this.formatDate(to);

    ticker = ticker.toUpperCase().trim();

    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${fromQuery}/${toQuery}?apiKey=${environment.polygonApiKey}`;
    console.log(url); //, ticker, from, to, environment.polygonApiKey);

    return this.http.get<IStockResult>(url);

    //return 'past performance';

    // const rest = restClient(environment.polygonApiKey);
    //   return rest.stocks.aggregates(
    //     ticker,
    //     1,
    //     'day',
    //     this.formatDate(from),
    //     this.formatDate(to)
    //   );
  }
}
