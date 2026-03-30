import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-pages',
  imports: [],
  templateUrl: './counter-pages.html',
  styleUrl: './counter-pages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPages {
  counter = 10;
  counterSignal = signal(10);
  incresaeBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decresaeBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  constructor() {
    setInterval(() => {
      this.counterSignal.update((v) => (v += 1));
      console.log('Tick');
    }, 2000);
  }
}
