import { createSelector } from '@ngrx/store';

import { IEvent } from '../../shared/models';
import { IState } from '../../shared/models';

export const getEvents = (state: IState) => state.events;

export const selectEvents = createSelector(getEvents, (state: IEvent[]) => {
  return state;
});
