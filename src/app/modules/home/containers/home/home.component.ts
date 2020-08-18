import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: IEvent[] = [
    {
      id: '1',
      name: 'Event 1',
      address: 'USA, NY',
      date: '13 april',
    },
    {
      id: '2',
      name: 'Event 2',
      address: 'USA, NY',
      date: '14 april',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
