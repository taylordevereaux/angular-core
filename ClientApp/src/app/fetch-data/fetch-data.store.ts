import { Store } from 'rxjs-observable-store';
import { Injectable } from '@angular/core';
import { FetchDataState } from './fetch-data.state';
import { SampleDataService } from '../_endpoints/sample-data.service';

@Injectable()
export class FetchDataStore extends Store<FetchDataState> {
  constructor(private service: SampleDataService) {
    // Set the intial state to an empty array of forecasts.
    super({
      forecasts: [],
      isLoading: false,
      isError: false // If an error occurs fetching the data.
    });
  }

  refreshForecasts() {
    this.setState({
      ...this.state,
      isLoading: true
    });
    // Fetch the Forecasts from the server.
    this.service.getWeatherForcasts().subscribe({
      next: forecasts => {
        this.setState({
          forecasts: forecasts,
          isLoading: false,
          isError: false
        });
      },
      error: error => {
        console.error(error);
        this.setState({
          ...this.state,
          isLoading: false,
          isError: true
        });
      }
    });
  }
}
