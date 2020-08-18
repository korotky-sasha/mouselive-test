import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../../../shared/models';
import { selectEvents } from '../../../../store/event/event.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events$ = this.store.select(selectEvents);

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {}
}
