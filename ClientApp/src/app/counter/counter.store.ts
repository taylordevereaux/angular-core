import { Store } from 'rxjs-observable-store';
import { Injectable } from '@angular/core';
import { CounterState } from './counter.state';

@Injectable()
export class CounterStore extends Store<CounterState> {
  constructor() {
    super({
      increment: 0
    });
  }

  incrementCounter() {
    this.setState({
      ...this.state,
      increment: this.state.increment + 1
    });
  }
}
