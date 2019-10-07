import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastModel } from '../_models/weather-forecast-model';
import { SampleDataService } from '../_endpoints/sample-data.service';
import { FetchDataStore } from './fetch-data.store';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  constructor(public store: FetchDataStore) {}

  ngOnInit() {
    this.store.refreshForecasts();
  }
}
