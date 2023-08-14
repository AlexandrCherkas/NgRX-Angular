import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit{

  public counterDisplay!: number;

  constructor(
    private store: Store <{counter: {counter: number}}>
  ){}

  ngOnInit(): void {
    this.store.select('counter')
      .subscribe( num => this.counterDisplay = num.counter)
  }
}
