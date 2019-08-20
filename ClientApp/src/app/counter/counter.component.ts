import { Component } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  constructor(public store: CounterStore) {}
}
