import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../models';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss'],
})
export class EventPreviewComponent implements OnInit {
  @Input() event: IEvent = {
    id: '1',
    name: 'Name',
    address: 'Address',
    date: 'Date',
  };

  constructor() {}

  ngOnInit(): void {}
}
