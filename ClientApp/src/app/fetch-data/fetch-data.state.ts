import { WeatherForecastModel } from '../_models/weather-forecast-model';

export interface FetchDataState {
  forecasts: WeatherForecastModel[];
  isLoading: boolean;
  isError: boolean;
}
