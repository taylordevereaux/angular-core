import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  constructor() {}

  convertToCelsius(value: number) {
    return (value - 32) * (5 / 9);
  }

  convertToFahrenheit(value: number) {
    return value * (9 / 5) + 32;
  }
}
