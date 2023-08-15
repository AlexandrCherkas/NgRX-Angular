import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, changeChanelName } from 'src/app/shared/store/counter.actions';
import { ICounterModal } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbotton',
  templateUrl: './counterbotton.component.html',
  styleUrls: ['./counterbotton.component.scss']
})
export class CounterbottonComponent {
  constructor(
    private store: Store<{counter: ICounterModal}>){
  }

  public OnIncrement(): void{
    this.store.dispatch(increment())
  }

  public OnDecrement(): void{
    this.store.dispatch(decrement())
  }

  public OnReset(): void {
    this.store.dispatch(reset())
  }

  public OnRename(): void {
    this.store.dispatch(changeChanelName({name: "Welcome to Alexander"}))
  }
}
