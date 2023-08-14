import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-counterbotton',
  templateUrl: './counterbotton.component.html',
  styleUrls: ['./counterbotton.component.scss']
})
export class CounterbottonComponent {
  constructor(
    private store: Store<{counter:{counter: number}}>){
  }

  public OnIncrement(){
    this.store.dispatch(increment())
  }

  public OnDecrement(){
    this.store.dispatch(decrement())
  }

  public OnReset() {
    this.store.dispatch(reset())
  }
}
