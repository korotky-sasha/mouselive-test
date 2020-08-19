import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AddEventService } from '../../modules/add-events/services/add-event.service';
import { IEvent } from '../../shared/models';

@Injectable()
export class EventEffects {
  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AddEvent Component] Add Event'),
      mergeMap((value: IEvent) =>
        this.addEventService.addEvent(value).pipe(
          map((event) => ({
            type: '[Events API] Event Uploading Success',
            payload: event,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private addEventService: AddEventService
  ) {}
}
