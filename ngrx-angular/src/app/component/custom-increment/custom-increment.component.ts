import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { Effect } from 'src/app/shared/Interfaces/state';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.scss']
})
export class CustomIncrementComponent {
  public customInput: number;
  public actionType: string = Effect.ADD;

  constructor( private store: Store<{counter: {counter: number}}>) {}

  public customIncrement() {
    if (this.customInput) {
      this.store.dispatch(customIncrement({ value: Number(this.customInput), effect: String(this.actionType) }))
    }
  }
}