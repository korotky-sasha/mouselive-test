import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { IEvent } from '../../../../shared/models';
import {
  addEvent,
  addEventSuccess,
} from '../../../../store/event/event.actions';
import { AddEventService } from '../../services/add-event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  addEventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IEvent[]>,
    private addEventService: AddEventService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.addEventForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  addEvent(): void {
    if (this.addEventForm.valid) {
      this.store.dispatch(addEventSuccess({ event: this.addEventForm.value }));
    }
  }
}
