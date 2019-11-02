/**
 * The Shared Module is a place to put all common components, pipes, directives and providers
 * used throughout the application.
 * The Shared Module should be used whenever you believe an item will be needed outside of it's current module.
 */
import { NgModule } from '@angular/core';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  imports: [],
  declarations: [TemperaturePipe],
  exports: [
    // Pipes
    TemperaturePipe
  ]
})
export class SharedModule {}
