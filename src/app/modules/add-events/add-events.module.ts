import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AddEventsRoutingModule } from './add-events-routing.module';
import { AddEventComponent } from './containers/add-event/add-event.component';

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    AddEventsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AddEventsModule {}
