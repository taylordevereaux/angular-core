import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  constructor() {}

  convertToCelcius(value: number) {
    return value * 0.234;
  }
}
