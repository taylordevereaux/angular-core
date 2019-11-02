import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureConversionService } from 'src/app/_services/temperature-conversion.service';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  constructor(private temperatureService: TemperatureConversionService) {}

  transform(value: any, unit: string): any {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        return Math.round(this.temperatureService.convertToCelsius(value));
      } else if (unit === 'F') {
        return Math.round(this.temperatureService.convertToFahrenheit(value));
      }
    }
    return null;
  }
}
