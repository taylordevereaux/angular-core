import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastModel } from '../_models/weather-forecast-model';
import { SampleDataService } from '../_endpoints/sample-data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecastModel[];

  constructor(private sampleDataService: SampleDataService) {
    this.sampleDataService.getWeatherForcasts().subscribe({
      next: forecasts => (this.forecasts = forecasts),
      error: errors => console.error(errors)
    });
  }
}
