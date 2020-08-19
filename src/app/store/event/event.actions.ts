import { createAction, props } from '@ngrx/store';

import { IEvent } from '../../shared/models';

export const setEvents = createAction(
  '[Home Component] Set Events',
  props<{ events: IEvent[] }>()
);

export const addEvent = createAction(
  '[AddEvent Component] Add Event',
  props<{ event: IEvent }>()
);

export const addEventSuccess = createAction(
  '[Events API] Event Uploading Success',
  props<{ event: IEvent }>()
);
