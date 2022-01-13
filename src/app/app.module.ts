import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StockPerformanceChartComponent } from './stock-performance-chart/stock-performance-chart.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { StockSearchComponent } from './components/stock-search/stock-search.component';


@NgModule({
  declarations: [
    AppComponent,
    // StockPerformanceChartComponent,
    StockSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
