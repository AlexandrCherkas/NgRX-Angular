import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterModal } from 'src/app/shared/store/counter.model'; 
import { Observable } from "rxjs"

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit, OnDestroy{

  public counterDisplay: number;
  public chanelName: string;
  counter$: Observable<ICounterModal>

  constructor(
    private store: Store <{counter: ICounterModal}>
  ){}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
  }
}
