import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEventsRoutingModule } from './add-events-routing.module';
import { AddEventComponent } from './containers/add-event/add-event.component';


@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    AddEventsRoutingModule
  ]
})
export class AddEventsModule { }
