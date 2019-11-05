import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastModel } from '../_models/weather-forecast-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getWeatherForcasts() {
    return this.http.get<WeatherForecastModel[]>(
      `${this.baseUrl}api/SampleData/WeatherForecasts`
    );
  }
}
