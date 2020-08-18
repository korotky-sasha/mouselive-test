import { ActionReducerMap } from '@ngrx/store';
import { IState } from '../shared/models';
import { EventReducer } from './event/event.reducer';

export const reducers: ActionReducerMap<IState> = {
  events: EventReducer,
};
