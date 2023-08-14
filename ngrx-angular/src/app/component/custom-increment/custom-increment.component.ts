import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.scss']
})
export class CustomIncrementComponent {
  public customInput: number;
  public actionType: string = 'add';

  constructor( private store: Store<{counter: {counter: number}}>) {}

  public customIncrement() {
    console.log(this.actionType)
    if (this.customInput) {
      this.store.dispatch(customIncrement({ value: Number(this.customInput), action: String(this.actionType) }))
    }
  }

}